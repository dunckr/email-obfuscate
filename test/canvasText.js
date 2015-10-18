import expect from 'expect'
import describeClass from '../src/canvasText';

describe('canvasText', () => {
  var subject;
  var options = {};
  var el;
  var canvas;

  beforeEach(() => {
    el = document.createElement('div');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('should throw an error without options', () => {
    expect(() => new describeClass(el)).toThrow();
  });

  beforeEach(() => {
    options = {
      color: 'rgb(0, 0, 0)',
      font: '',
      fontSize: 16,
      height: 17,
      text: 'email@obfuscate.js',
      underline: false,
      width: 123
    };
    subject = new describeClass(el, options);
  });

  describe('creates a canvas element', () => {

    it('should have a set width', () => {
      expect(subject.create().width).toEqual(options.width);
    });

    it('should have a set height', () => {
      expect(subject.create().height).toEqual(options.height);
    });

  });

});
