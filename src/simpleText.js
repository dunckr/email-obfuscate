import BaseText from './text'

export default class SimpleText extends BaseText {

  _createElement() {
    const exisitingElement = this.parent.getElementsByTagName('a').length > 0
    if (exisitingElement) {
      this.element = this.parent.getElementsByTagName('a')[0]
    } else {
      this.element = document.createElement('a')
    }
    this.element.innerHTML = this.options.altText
    this._styleElement()
    if (!exisitingElement) {
      this.parent.appendChild(this.element)
    }
  }

  _styleElement() {
    this.element.style.cursor = 'pointer'
  }

}
