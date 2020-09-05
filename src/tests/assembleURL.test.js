const assembleURL = require('../utils/assembleURL')

describe('Assemble URL', () => {
  it('should returns a Google Maps URL pattern', () => {
    const randomAddress = 'Abbey Road, Londres'
    const url = assembleURL(randomAddress)
    expect(url).not.toBe(undefined || false)
    expect(url).toBe('https://www.google.com/maps/place/Abbey+Road,+Londres')
  })
})
