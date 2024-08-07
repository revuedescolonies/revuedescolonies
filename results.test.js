const testSearchResults = require("./gatsby-node.js")

test('hi', () => {
    expect(testSearchResults()).toBe("hello")
})