const randomCoords = require('./randomCoords.json')
const re = /@-?\d\d?(\.\d+)?,-?\d(\d?){2}(\.\d+)?/

describe('This validate coordinates regular expression', () => {
  it('should check the coordinates formats', () => {
    randomCoords.forEach(coord => {
      expect(re.test(coord)).toBeTruthy()
    })
  })
})
