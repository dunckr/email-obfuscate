import EmailObfuscate from '../src';

var el = document.getElementById('email');
EmailObfuscate(el, {});

// FIXME add google fonts
var fontList = [
  'Arial',
  'Trebuchet MS',
  'Verdana',
  'Lucida Bright',
  'Palatino',
  'Times New Roman',
  'Courier New'
];

var fontSelectionEl = document.getElementById('fontSelection');
fontList.map((font) => {
  var el = document.createElement('option');
  el.innerText = font;
  el.value = font;
  fontSelectionEl.appendChild(el);
});

fontSelectionEl.addEventListener('change', function(e) {
  var fontFamily = e.target.value;
  generateStyle(fontFamily);

  var el = document.getElementById('email');
  EmailObfuscate(el, {});
});

var generateStyle = (fontFamily) => {
  var css = `a { font-family: "${fontFamily}" }`;
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  var exisitingStyle = document.head.getElementsByTagName('style');
  if (exisitingStyle.length > 0){
    exisitingStyle[0].remove();
  }
  document.head.appendChild(style);
}
