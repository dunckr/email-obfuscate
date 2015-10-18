export default class CanvasText {

  constructor(parent, options) {
    if (!parent) { throw new Error('Require DOM element'); }
    if (!options) { throw new Error('Require options'); }
    this.parent = parent;
    this.options = options;
  }

  create() {
    this._createCanvas();
    this._createText();
    this.parent.addEventListener('click', () => this.handleOnClick());
    return this.canvas;
  }

  handleOnClick() {
    window.location.href = `mailto:${this.options.text}`;
  }

  handleOnHover() {}

  _createCanvas() {
    var exisitingCanvas = this.parent.getElementsByTagName('canvas').length > 0;
    if (exisitingCanvas) {
      this.canvas = this.parent.getElementsByTagName('canvas')[0];
    } else {
      this.canvas = document.createElement('canvas');
    }
    this.context = this.canvas.getContext('2d');
    this._styleCanvas();
    if (!exisitingCanvas) {
      this.parent.appendChild(this.canvas);
    }
  }

  _styleCanvas() {
    var width = this.options.width;
    var height = this.options.height;
    var ratio = this._calculateRatio();
    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.context.scale(ratio, ratio);
    this.canvas.style.cursor = 'pointer';
  }

  _createText() {
    this.context.textAlign = 'left';
    this.context.textBaseline = 'bottom';
    this.context.font = this.options.font;
    this.context.fillStyle = this.options.color;
    this.context.fillText(this.options.text, 0, this.options.height);
    if (this.options.underline) {
      var underlineSize = this.options.fontSize / 10;
      var offset = underlineSize;
      this.context.fillRect(0, this.options.height - underlineSize - offset, this.options.width, underlineSize);
    }
  }

  _calculateRatio() {
    return this._devicePixelRatio() / this._backingStorePixelRatio();
  }

  _devicePixelRatio() {
    return window.devicePixelRatio || 1;
  }

  _backingStorePixelRatio() {
    return this.context.webkitBackingStorePixelRatio ||
      this.context.mozBackingStorePixelRatio ||
      this.context.msBackingStorePixelRatio ||
      this.context.oBackingStorePixelRatio ||
      this.context.backingStorePixelRatio || 1;
  }

}
