import assign from 'object-assign';
import PseudoElement from './pseudoElement';
import CanvasText from './canvasText';
import SimpleText from './simpleText';

var DEFAULTS = {
  name: 'email',
  domain: 'obfuscate',
  tld: 'js',
  altText: 'Email'
};

export default (el, opts = {}) => {
  var options = assign(DEFAULTS, opts);

  if (window.HTMLCanvasElement) {
    var pseudoElement = new PseudoElement(el, options);
    var style = pseudoElement.determineStyle();
    var canvasText = new CanvasText(el, style);
    canvasText.create();
  } else {
    var simpleText = new SimpleText(el, options);
    simpleText.create();
  }
  return el;
};
