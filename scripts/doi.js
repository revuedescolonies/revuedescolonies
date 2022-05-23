// generateDOI() generates a DOI based on Base32 encoding. 
// Inspired by https://github.com/datacite/cirneco.

// NB This is JavaScript and not TypeScript because it's used by gastby-node.js.

const crypto = require('crypto')

const validatePrefix = (prefix) => {
  return prefix.match(/^10\.\d{4,9}/)
}

const base32Encode = (buffer) => {
  // Some code from https://github.com/LinusU/base32-encode (MIT LICENSE)
  // We only implement Crockford because it's the most human readable:
  // it avoids the letters I, O and L as they can be confused with digits 1 and 0.
  const alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
  const length = buffer.byteLength
  const view = new Uint8Array(buffer)

  let bits = 0
  let value = 0
  let output = ''

  for (let i = 0; i < length; i++) {
    value = (value << 8) | view[i]
    bits += 8

    while (bits >= 5) {
      output += alphabet[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }

  if (bits > 0) {
    output += alphabet[(value << (5 - bits)) & 31]
  }

  return output
}

const generateDOI = async (prefix) => {
  if (!validatePrefix(prefix)) {
    throw Error('DOI Prefix is not valid.')
  }

  const suffix = base32Encode(crypto.randomBytes(5))

  return `${prefix}/${suffix}`
}

// Default generator script
generateDOI('10.55520').then(doi => console.log(doi))

module.exports = {generateDOI}