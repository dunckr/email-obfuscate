export default class Ratio {

  constructor(context) {
    this.context = context
  }

  calculate() {
    return this._devicePixelRatio() / this._backingStorePixelRatio()
  }

  _devicePixelRatio() {
    return window.devicePixelRatio || 1
  }

  _backingStorePixelRatio() {
    return this.context.webkitBackingStorePixelRatio ||
      this.context.mozBackingStorePixelRatio ||
      this.context.msBackingStorePixelRatio ||
      this.context.oBackingStorePixelRatio ||
      this.context.backingStorePixelRatio || 1
  }
}
