import expect from 'expect'
import describeClass from '../src/ratio'

describe('Ratio', () => {
  let subject
  const context = (ratio) => {
    return {
      webkitBackingStorePixelRatio: ratio,
      mozBackingStorePixelRatio: ratio,
      msBackingStorePixelRatio: ratio,
      oBackingStorePixelRatio: ratio,
      backingStorePixelRatio: ratio
    }
  }

  it('should determine the correct pixel ratio', () => {
    const values = [{
      input: 1,
      output: 1
    }, {
      input: 2,
      output: 0.5
    }, {
      input: 4,
      output: 0.25
    }]

    values.map((v) => {
      subject = new describeClass(context(v.input))
      expect(subject.calculate()).toEqual(v.output)
    })
  })

})
