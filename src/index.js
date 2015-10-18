import assign from 'object-assign';
import PseudoElement from './pseudoElement';
import CanvasText from './canvasText';

var DEFAULTS = {
  name: 'email',
  domain: 'obfuscate',
  tld: 'js'
};

export default (el, opts = {}) => {
  var options = assign(DEFAULTS, opts);

  var pseudoElement = new PseudoElement(el, options);
  var style = pseudoElement.determineStyle();

  var canvasText = new CanvasText(el, style);
  canvasText.create();
  return el;
};
