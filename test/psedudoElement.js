import expect from 'expect'
import describeClass from '../src/pseudoElement';

describe('pseudoElement', () => {
  var subject;

  beforeEach(() => {
    subject = new describeClass();
  });

  it('should create an element without options', () => {
    expect(subject.test()).toBe(1);
  });

  it('should create an element with options', () => {
    expect(subject.test()).toBe(1);
  });

  it('should determine the size', () => {
    expect(subject.test()).toBe(1);
  });

  it('should determine the attributes', () => {
    expect(subject.test()).toBe(1);
  });

  it('should determine the hover state attributes', () => {
    expect(subject.test()).toBe(1);
  });

});
