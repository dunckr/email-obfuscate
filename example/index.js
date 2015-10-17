import EmailObfuscate from '../src';
const fontList = [
  'Abril Fatface',
  'Arial',
  'Arvo',
  'Courier New',
  'Droid Sans',
  'Josefin Sans',
  'Lato',
  'Lucida Bright',
  'Old Standard TT',
  'Open Sans',
  'Palatino',
  'PT Serif',
  'Times New Roman',
  'Trebuchet MS',
  'Ubuntu',
  'Verdana',
  'Volkhov'
];

var emailObfuscate = () => {
  var el = document.getElementById('email');
  EmailObfuscate(el, {});
}

var generateStyle = (fontFamily) => {
  var css = `a { font-family: "${fontFamily}" }`;
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  var exisitingStyle = document.head.getElementsByTagName('style');
  if (exisitingStyle.length > 0) {
    exisitingStyle[0].remove();
  }
  document.head.appendChild(style);
}

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
  emailObfuscate();
});

emailObfuscate();
