export default class PseudoElement {

  constructor(parent, options) {
    if (!parent) { throw new Error('Require DOM element'); }
    this.parent = parent;
    this.options = options;
    this.text = this._generateText();
  }

  determineStyle() {
    this._createElement();
    this._insertElement();
    var computedStyle = this._computeStyle();
    var fontSizeNumber = Number(computedStyle.fontSize.slice(0, -2));
    var attributes = {
      font: computedStyle.font,
      color: computedStyle.color,
      width: this.element.offsetWidth,
      height: this.element.offsetHeight,
      fontSize: fontSizeNumber,
      underline: computedStyle.textDecoration === 'underline',
      text: this.text
    };
    this.parent.removeChild(this.element);
    return attributes;
  }

  _createElement() {
    this.element = document.createElement('a');
    this.element.style.visibility = 'hidden';
    this.element.innerText = this._obfuscateText();
  }

  _insertElement() {
    this.parent.appendChild(this.element);
  }

  _computeStyle() {
    return window.getComputedStyle(this.element);
  }

  _obfuscateText() {
    return `@.${this.options.tld}${this.options.domain}${this.options.name}`;
  }

  _generateText() {
    return `${this.options.name}@${this.options.domain}.${this.options.tld}`;

  }

}
