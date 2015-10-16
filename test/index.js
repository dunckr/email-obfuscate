import expect from 'expect'
import describedSpec from '../src';

describe('index', function() {

  it('should return a message', function() {
    expect(describedSpec()).toBe('Hello Lib Starter');
  });

});
