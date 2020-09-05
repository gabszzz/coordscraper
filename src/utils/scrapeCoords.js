const { errors } = require('../config')

/**
 * This function scrapes the coordinates contained in the data.
 * @param {string} data
 * @returns {Object} { lat: foo, lon: bar }
 */

module.exports = data => {
  const re = /@-?\d\d?(\.\d+)?,-?\d(\d?){2}(\.\d+)?/
  const match = re.exec(data)
  if(!match) throw new Error(errors.ADDR_NOT_RESOLVED)

  const coords = match[0].substr(1).split(',')
  return coords
}
