# Email Obfuscate [![Build Status](https://travis-ci.org/dunckr/email-obfuscate.svg?branch=master)](https://travis-ci.org/dunckr/email-obfuscate)

Help prevent email addresses from being scraped.

## Demo

[http://dunckr.github.io/email-obfuscate/example/](http://dunckr.github.io/email-obfuscate/example/)

## Overview

Email addresses are [harvested](https://en.wikipedia.org/wiki/Email_address_harvesting) from websites using [web scrapers](https://github.com/lorien/awesome-web-scraping).

There are many strategies that can be employed to mitigate scrapers:
[1,](http://security.stackexchange.com/questions/81964/are-web-scrapers-fooled-by-obscured-emails-anymore)
[2,](https://www.quora.com/Whats-the-best-way-to-prevent-email-scraping)
[3,](http://stackoverflow.com/questions/3161548/how-do-i-prevent-site-scraping)
[4.](http://stackoverflow.com/questions/23002711/how-to-show-email-addresses-on-the-website-to-avoid-spams)
However, it must be noted that preventing scraping is an [arms-race](https://en.wikipedia.org/wiki/Arms_race).

This library's aim to prevent searching for ```mailto``` links or using email address regexes.

It does this by constructing an email address from an object then drawing the text as an image using the canvas. 
As such only browsers with canvas (IE9+) are supported. 
However, the images could be generated during a build or on the server using [node-canvas](https://github.com/Automattic/node-canvas).

## Installation

```
npm install email-obfuscate
```

## Usage

```
import EmailObfuscate from 'email-obfuscate';

var el = document.getElementById('email');

EmailObfuscate(el, {
  name: 'test',
  domain: 'example',
  tld: 'com'
});
```

## Dev

```
npm run start
```

## Test

```
npm run test
```

## Build

```
npm run build
```

## License

MIT © [Duncan Beaton](http://dunckr.com)
