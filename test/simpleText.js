import expect from 'expect'
import describeClass from '../src/simpleText';

describe('simpleText', () => {
  var subject;
  var options = {};
  var el;

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
      altText: 'Alternate'
    };
    subject = new describeClass(el, options);
  });

  describe('creates an element', () => {

    it('should have a text set to altText', () => {
      expect(subject.create().innerText).toEqual(options.altText);
    });

  });

});
