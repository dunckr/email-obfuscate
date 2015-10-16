// create the canvas
// must have extra pixels - down size for retina
// positioning difficult  - ctx.textAlign="left";

// add text to the canvas that matches the pseduo
// provide overrides

// change the text on hover similar to default behaviour

// add click event to open email address
// provide shorthand to set subject etc
// make sure can just use default href will override


import assign from 'object-assign';


var DEFAULTS = {
  text: 'test@example.com',
  href: 'test@example.com',
  parent: window.document.body,
  style: {
  }
};

export default class CanvasText {

  constructor(options = {}) {
    this.options = assign(DEFAULTS, options);

    this.createCanvas();
    this.createText();
  }

  createCanvas() {
    // FIXME passed in as options
    this.canvas = document.getElementsByTagName('canvas')[0];
    this.context = this.canvas.getContext('2d');

    window.canvas = this.canvas;

    var width = this.options.style.width;
    var height = this.options.style.height;
    var ratio = this._calculateRatio();

    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;

    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.context.scale(ratio, ratio);
    this.canvas.style.cursor = 'pointer';
  }

  createText() {
    this.context.textAlign = 'left';
    this.context.textBaseline = 'bottom';
    console.log(this.options.style.font);
    this.context.font = this.options.style.font;
    this.context.fillStyle = this.options.style.color;
    this.context.fillText(this.options.text, 0, this.options.style.height);
    // FIXME magic number
    this.context.fillRect(0, this.options.style.height - 3.5, this.options.style.width, 1.5);
  }

  handleOnClick() {}

  handleOnHover() {
    // at least do an underline
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
