import React from "react"

import { TBehavior,  } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

type TEIProps = {
  teiNode: Node,
  availableRoutes?: string[]
}

const Graphic: TBehavior = (props: TEIProps) => {
  const imgData = useStaticQuery(graphql`
  query imgData {
    allFile(filter: {relativeDirectory: {nin: "facs"}, ext: {eq: ".jpg"}}) {
      nodes {
        name
        ext
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  }
  `)

  const el = props.teiNode as Element
  const src = el.getAttribute("url")
  const desc = el.parentElement?.getElementsByTagName("tei-figDesc") || []
  const noDesc = "No description provided."
  if (!src) return null

  const img = imgData.allFile.nodes.filter((n: any) => {
    // TODO: This is temporary until better image export from Strapi
    const [name, extension] = src.split(/\.(?=[^\.]+$)/);
    // Split the name at the last underscore and remove the last part
    const newName = name.substring(0, name.lastIndexOf("_"));
    // Reattach the extension
    const cleanSrc = `${newName}.${extension}`;
    return n.name + n.ext === cleanSrc}
  )[0]
  if (img) {
    return (<Behavior node={props.teiNode}>
      <GatsbyImage
        image={img.childImageSharp.gatsbyImageData}
        alt={desc[0] ? desc[0].textContent || noDesc : noDesc}/>
      </Behavior>)
  }

  return null
}

export default Graphic
