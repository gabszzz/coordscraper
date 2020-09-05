const { getCoords } = require('../index')

describe('Getting Coordinates', () => {
  it('sould returns latitude and longitude', async () => {
    const re = /^-?\d(\d?){1,2}(\.\d+)?$/
    const coords = await getCoords('Guaianases')
    expect(coords).not.toBe(undefined || false)
    expect(re.test(coords.lat)).toBeTruthy()
    expect(re.test(coords.lon)).toBeTruthy()
  })
})

