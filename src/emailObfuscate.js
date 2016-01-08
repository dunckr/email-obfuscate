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

export default (el, opts = {}) => {
  const options = assign(DEFAULTS, opts)

  if (window.HTMLCanvasElement) {
    const pseudoElement = new PseudoElement(el, options)
    const style = pseudoElement.determineStyle()
    const canvasText = new CanvasText(el, style)
    canvasText.create()
  } else {
    const simpleText = new SimpleText(el, options)
    simpleText.create()
  }
  return el
}
