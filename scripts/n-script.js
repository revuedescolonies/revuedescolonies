const { JSDOM } = require("jsdom")
const serialize = require("w3c-xmlserializer");
const fs = require("fs")
const path = require("path")

// filePaths stores the file paths of all the documents
const filePaths = [
    "static/data/tei/RdCv1n1-en.xml",
    "static/data/tei/RdCv1n1-fr.xml",
    "static/data/tei/RdCv1n2-en.xml",
    "static/data/tei/RdCv1n2-fr.xml",
    "static/data/tei/RdCv1n3-en.xml",
    "static/data/tei/RdCv1n3-fr.xml",
    "static/data/tei/RdCv1n4-en.xml",
    "static/data/tei/RdCv1n4-fr.xml",
    "static/data/tei/RdCv1n5-en.xml",
    "static/data/tei/RdCv1n5-fr.xml",
    "static/data/tei/RdCv1n6-en.xml",
    "static/data/tei/RdCv1n6-fr.xml",
    "static/data/tei/RdCv1n7-en.xml",
    "static/data/tei/RdCv1n7-fr.xml",
    "static/data/tei/RdCv1n8-en.xml",
    "static/data/tei/RdCv1n8-fr.xml",
    "static/data/tei/RdCv1n9-en.xml",
    "static/data/tei/RdCv1n9-fr.xml",
    "static/data/tei/RdCv1n10-en.xml",
    "static/data/tei/RdCv1n10-fr.xml",
    "static/data/tei/RdCv1n11-en.xml",
    "static/data/tei/RdCv1n11-fr.xml",
    "static/data/tei/RdCv1n12-en.xml",
    "static/data/tei/RdCv1n12-fr.xml",
    "static/data/tei/RdCv2n1-en.xml",
    "static/data/tei/RdCv2n1-fr.xml",
    "static/data/tei/RdCv5n6-en.xml",
    "static/data/tei/RdCv5n6-fr.xml"
];

// now we loop through each of the filepath stored
filePaths.forEach((filepath) =>{
    // using .readFileSync, we read the content of each file using the filepath
    const content = fs.readFileSync(filepath, "utf-8")

    // now parse the content of each document and convert that into a DOM
    const dom = new JSDOM(content, { contentType: "application/xml" })
    const document = dom.window.document

    // identify all the divs in the document
    const heads = document.querySelectorAll("head")
    
    // store all the words that could be lower-case when converting words to title case
    const lowerWords = ["a", "an", "and", "as", "at", "but", "by", "for", "in", "nor",
                  "of", "on", "or", "the", "up"]

    // go through each div section
    if (heads) {
        heads.forEach((section) => {
            // nTag will represent the final tag that would be stored in the new n
            // attribute for each section of the documents
            let nTag = []
            
            const headText = section.textContent
                // if the file is an english document, have specific logic
                if (filepath.endsWith("en.xml")) {
                    // split all the words in the original header text and split up
                    // by word
                    const headWords = headText.toLowerCase().split(" ")
    
                    // for each word, if the word is a lower-case word as suggested in
                    // lowerWords, the word is added to the final nTag and if not, 
                    // then the first letter is converted to upper case while all the 
                    // other letters maintin lower case
                    for (let i = 0; i < headWords.length; i++){
                        let cleanStr = headWords[i].replace(/\n/g, "")
                        if (i == 0 && cleanStr) {
                            newWord = cleanStr[0].toUpperCase() + cleanStr.slice(1)
                            nTag.push(newWord)
                        } else if (lowerWords.includes(cleanStr)){
                            nTag.push(cleanStr)
                        } else {
                            if (!"0123456789".includes(cleanStr)) {
                                const newWord = cleanStr[0].toUpperCase() + cleanStr.slice(1)
                                nTag.push(newWord)
                            } else if (cleanStr != "") {
                                nTag.push(cleanStr)
                            }
                        }
                    }
                    // the n attribute is set within the header and proper text
                    section.setAttribute("n", nTag.join(" "))
            
                // if the file is in french, have specific logic
                } else if (filepath.endsWith("fr.xml")) {
                    // split all the words in the original header text and split up
                    // by word
                    
                    const words = headText.toLowerCase().split(" ")
                    const headWords = words.filter(value => value !== null && value !== undefined && value !== '' && value !== "\n")
                    // for each word, if the word is first in the section, it is 
                    // converted in the way that the first letter is upper-case and the 
                    // rest are lower-case and if not, then the lower-case word is added

                    for (let i = 0; i < headWords.length; i++){
                        let cleanStr
                        if (headWords[i]) {
                            cleanStr = headWords[i].replace(/\n/g, "")
                            if (i == 0 && cleanStr) {
                                newWord = cleanStr[0].toUpperCase() + cleanStr.slice(1)
                                nTag.push(newWord)
                            } else if (cleanStr != "") {
                                nTag.push(cleanStr)
                            }
                        }

                        
                    }
                    // the n attribute is set within the header and proper text
                    section.setAttribute("n", nTag.join(" "))
                }
            
        })
    }
    
    
    // sterialize document into a string
    const serializedDocument = serialize(document)

    //make a new file path to store the changes
    //const outputPath = path.join(path), "new_" + path.basename(filepath))
    fs.writeFileSync("static/data/new/" + path.basename(filepath), serializedDocument, "utf-8")


})
