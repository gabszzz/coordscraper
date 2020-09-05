const { baseURL } = require('../config')

/**
 * This function applies the Google Maps URL pattern
 * @param {string} addr Full address
 * @returns Standardized URL
 */

module.exports = (addr) => {
  const addrWithoutSpaces = addr.replace(/ /g, '+')
  const url = baseURL.concat(addrWithoutSpaces)
  return url
}
