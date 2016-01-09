import assign from 'object-assign'
import PseudoElement from './pseudoElement'
import CanvasText from './canvasText'
import SimpleText from './simpleText'

const DEFAULTS = {
  name: 'email',
  domain: 'obfuscate',
  tld: 'js',
  altText: 'Email',
}

export class EmailObfuscate {

  constructor(el, opts = {}) {
    this.el = el
    const options = assign(DEFAULTS, opts)
    if (window.HTMLCanvasElement) return this._pseudoElement(options)
    return this._simpleText(options)
  }

  // private

  _pseudoElement(options) {
    const pseudoElement = new PseudoElement(this.el, options)
    const style = pseudoElement.determineStyle()
    const canvasText = new CanvasText(this.el, style)
    return canvasText.create()
  }

  _simpleText(options) {
    const simpleText = new SimpleText(this.el, options)
    return simpleText.create()
  }
}

export default (el, opts) => {
  return new EmailObfuscate(el, opts)
}
