import assign from 'object-assign';
import PseudoElement from './pseudoElement';
import CanvasText from './canvasText';

// FIXME should
//name: ‘test’,
//domain: ‘example’,
//tld: ‘com’
var DEFAULTS = {
  text: 'test@example.com'
};

export default (el, opts={}) => {

  var options = assign(DEFAULTS, opts);

  var pseudoElement = new PseudoElement(el, options);
  var style = pseudoElement.determineStyle();

  var canvasText = new CanvasText(el, style);
  canvasText.create();
  return el;
};
