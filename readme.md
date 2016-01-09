# Email Obfuscate [![Build Status](https://travis-ci.org/dunckr/email-obfuscate.svg?branch=master)](https://travis-ci.org/dunckr/email-obfuscate)

![Example](https://raw.githubusercontent.com/dunckr/email-obfuscate/master/example/example.jpg)

Guard email addresses from being simply scraped by bots.

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

For older browsers without a canvas (IE8) we append an element using the alternate text.

## Installation

```sh
npm install email-obfuscate --save
```

## Usage

```js
import EmailObfuscate from 'email-obfuscate';

var el = document.getElementById('email');

EmailObfuscate(el, {
  // Email construct: name@domain.tld
  name: 'test',
  domain: 'example',
  tld: 'com',
  // Alternate Text
  altText: 'Email'
});
```

## API

### EmailObfuscate(el, [options])

#### el

Type: `HTMLElement`

The element to replace with EmailObfuscate.

#### options

##### name

Type: `string`  
Default: `test`

The name portion of the email address to use (**name**@email.com).

##### domain

Type: `string`  
Default: `example`

The domain name portion of the email address to use (name@**email**.com).

##### tld

Type: `string`  
Default: `com`

The top-level domain portion of the email address to use (name@email.**com**).

##### altText

Type: `string`  
Default: `Email`

The alternate text to use to represent the email address.  

## Dev

```sh
npm run start
```

## Test

```sh
npm run test
```

## Build

```sh
npm run build
```

## License

MIT © [Duncan Beaton](http://dunckr.com)
