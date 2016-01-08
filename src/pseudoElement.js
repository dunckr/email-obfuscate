export default class PseudoElement {

  constructor(parent, options) {
    if (!parent) { throw new Error('Require DOM element') }
    this.parent = parent
    this.options = options
  }

  determineStyle() {
    this._createElement()
    this._insertElement()
    const computedStyle = this._computeStyle()
    const fontSizeNumber = Number(computedStyle.fontSize.slice(0, -2))
    const attributes = {
      font: `${computedStyle.fontSize} ${computedStyle.fontFamily}`,
      fontSize: fontSizeNumber,
      color: computedStyle.color,
      width: this.element.offsetWidth,
      height: this.element.offsetHeight,
      underline: computedStyle.textDecoration === 'underline',
      text: this._generateText(),
    }
    this.parent.removeChild(this.element)
    return attributes
  }

  _createElement() {
    this.element = document.createElement('a')
    this.element.style.visibility = 'hidden'
    this.element.innerHTML = this._obfuscateText()
  }

  _insertElement() {
    this.parent.appendChild(this.element)
  }

  _computeStyle() {
    return window.getComputedStyle(this.element)
  }

  _obfuscateText() {
    return `@.${this.options.tld}${this.options.domain}${this.options.name}`
  }

  _generateText() {
    return `${this.options.name}@${this.options.domain}.${this.options.tld}`
  }

}
