import expect from 'expect'
import describeClass from '../src/pseudoElement';

describe('PseudoElement', () => {
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

  it('should throw an error without element', () => {
    expect(() => new describeClass()).toThrow();
  });

  it('should determine attributes of the psedueo element', () => {
    var options = {
      name: 'email',
      domain: 'obfuscate',
      tld: 'js'
    };
    subject = new describeClass(el, options);
    var style = subject.determineStyle();
    expect(style.color).toEqual('rgb(0, 0, 0)');
    expect(style.fontSize).toBe(16);
    expect(style.font).toContain('16px');
    expect(style.text).toEqual('email@obfuscate.js');
    expect(style.underline).toEqual(false);
    expect(style.width).toBeGreaterThan(120);
    expect(style.height).toBeGreaterThan(15);
  });

});
