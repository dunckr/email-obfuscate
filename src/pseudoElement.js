import assign from 'object-assign';

var DEFAULTS = {
  text: 'test@example.com',
  href: 'test@example.com',
  parent: window.document.body,
  style: {
    visibility: 'hidden'
  }
};

export default class PseudoElement {

  constructor(options={}) {
    this.options = assign(DEFAULTS, options);
  }

  calculateAttributes() {
    this._createElement();
    this._appendToDOM();
    var style = this._computeStyle();
    window.element = this.element;
    console.log(this.element.offsetHeight);

    return {
      font: style.font,
      color: style.color,
      width: this.element.offsetWidth,
      height: this.element.offsetHeight
    };
  }

  _createElement() {
    this.element = document.createElement('a');
    assign(this.element.style, this.options.style);
    this.element.innerText = this.options.text;
    this.element.href = this.options.href;
  }

  _appendToDOM() {
    this.options.parent.appendChild(this.element);
  }

  _computeStyle() {
    // FIXME not supported in IE8
    if (!window.getComputedStyle) {
      // # FIXME use defaults
      return {
        font: 'Times New Roman',
        color: 'Black'
      };
    }
    return window.getComputedStyle(this.element);
  }

}
