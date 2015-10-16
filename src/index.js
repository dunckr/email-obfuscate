import PseudoElement from './pseudoElement';
import CanvasText from './canvasText';

// take in options...
export default (options) => {

  var pseudoElement = new PseudoElement();
  var style = pseudoElement.calculateAttributes();

  var canvasText = new CanvasText({ style: style });

  console.log(canvasText);

};
