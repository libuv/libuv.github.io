'use strict';

var quotes = [
    'We #ifdef so you don\'t have to.',
    'Hey, I just met you, and this is crazy! Here is a callback, so call it maybe?',
    'libuv is for C projects that miss the joy of javascript callback hell.',
    'Node is libuv with a very well known client language.',
    'libuv, aka control flow obfuscation framework.'
];


function main() {
  var footer = document.querySelector('#footer-p');
  var index = Math.floor(Math.random() * quotes.length);
  footer.innerHTML += ' \u2014 ' + quotes[index];
}

(function (fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
})(main);
