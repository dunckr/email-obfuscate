import expect from 'expect'
import describeClass from '../src/pseudoElement';

describe('pseudoElement', () => {
  var subject;
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

  it('should determine attributes of the psedueo element', () => {
    var options = {
      name: 'email',
      domain: 'obfuscate',
      tld: 'js'
    };
    subject = new describeClass(el, options);
    expect(subject.determineStyle()).toEqual({
      color: 'rgb(0, 0, 0)',
      font: '',
      fontSize: 16,
      height: 17,
      text: 'email@obfuscate.js',
      underline: false,
      width: 123
    });
  });

});
