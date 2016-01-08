export default class Text {

  constructor(parent, options) {
    if (!parent) { throw new Error('Require DOM element') }
    if (!options) { throw new Error('Require options') }
    this.parent = parent
    this.options = options
  }

  create() {
    this._createElement()
    this._addEvents()
    return this.element
  }

  handleOnClick() {
    window.location.href = `mailto:${this.options.text}`
  }

  _addEvents() {
    if (this.parent.addEventListener) {
      this.parent.addEventListener('click', () => this.handleOnClick())
    } else if (this.parent.attachEvent) {
      this.parent.attachEvent('onclick', () => this.handleOnClick())
    }
  }

  _createElement() {}

}
