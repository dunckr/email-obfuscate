import expect from 'expect'
import describedSpec from '../src/emailObfuscate'

describe('EmailObfuscate', () => {
  let subject
  let el
  let canvas

  beforeEach(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
    subject = describedSpec(el)
    canvas = el.getElementsByTagName('canvas')[0]
  })

  afterEach(() => {
    document.body.removeChild(el)
  })

  describe('creates a canvas element', () => {

    it('should have a canvas', () => {
      expect(typeof canvas).toBe('object')
    })

    it('should have specific width', () => {
      expect(canvas.width).toBeGreaterThan(120)
    })

    it('should have specific height', () => {
      expect(canvas.height).toBeGreaterThan(15)
    })

  })
})
