export default class SimpleText {

  constructor(parent, options) {
    if (!parent) { throw new Error('Require DOM element'); }
    if (!options) { throw new Error('Require options'); }
    this.parent = parent;
    this.options = options;
  }

  create() {
    this._createElement();
    this._addEvents();
    return this.element;
  }

  handleOnClick() {
    window.location.href = `mailto:${this.options.text}`;
  }

  _addEvents() {
    if (this.parent.addEventListener) {
      this.parent.addEventListener('click', () => this.handleOnClick());
    } else if (this.parent.attachEvent) {
      this.parent.attachEvent('onclick', () => this.handleOnClick());
    }
  }

  _createElement() {
    var exisitingElement = this.parent.getElementsByTagName('a').length > 0;
    if (exisitingElement) {
      this.element = this.parent.getElementsByTagName('a')[0];
    } else {
      this.element = document.createElement('a');
    }
    this.element.innerHTML = this.options.altText;
    this._styleElement();
    if (!exisitingElement) {
      this.parent.appendChild(this.element);
    }
  }

  _styleElement() {
    this.element.style.cursor = 'pointer';
  }

}
