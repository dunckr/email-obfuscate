import BaseText from './text'
import Ratio from './ratio'

export default class CanvasText extends BaseText {

  _createElement() {
    this._createCanvas()
    this._createText()
  }

  _createCanvas() {
    const exisitingCanvas = this.parent.getElementsByTagName('canvas').length > 0
    if (exisitingCanvas) {
      this.element = this.parent.getElementsByTagName('canvas')[0]
    } else {
      this.element = document.createElement('canvas')
    }
    this.context = this.element.getContext('2d')
    this._styleCanvas()
    if (!exisitingCanvas) {
      this.parent.appendChild(this.element)
    }
  }

  _styleCanvas() {
    const width = this.options.width
    const height = this.options.height
    const ratio = new Ratio(this.context).calculate()
    this.element.width = width * ratio
    this.element.height = height * ratio
    this.element.style.width = `${width}px`
    this.element.style.height = `${height}px`
    this.context.scale(ratio, ratio)
    this.element.style.cursor = 'pointer'
  }

  _createText() {
    this.context.textAlign = 'left'
    this.context.textBaseline = 'bottom'
    this.context.font = this.options.font
    this.context.fillStyle = this.options.color
    this.context.fillText(this.options.text, 0, this.options.height)
    if (this.options.underline) {
      const underlineSize = this.options.fontSize / 10
      const offset = underlineSize
      const y = this.options.height - underlineSize - offset
      this.context.fillRect(0, y, this.options.width, underlineSize)
    }
  }

}
