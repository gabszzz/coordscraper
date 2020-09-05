const { get } = require('axios')
const assembleURL = require('./utils/assembleURL')
const scrapeCoords = require('./utils/scrapeCoords');

/**
 * This promise returns a object contains latitude and longitude.
 * @param {string} addr Full address
 * @returns {Object} {lat: foo, lon: bar}
 */
async function getCoords(addr) {
  try {
    const url = assembleURL(addr)
    const response = await get(url)
    const [lat, lon] = scrapeCoords(response.data)

    return { lat, lon }
  } catch(err) {
    console.error(err)
  }
}

module.exports = {
  getCoords
}
