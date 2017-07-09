'use strict';

var quotes = [];
quotes[0] = 'We #ifdef so you don\'t have to.';
quotes[1] = 'Hey, I just met you, and this is crazy! Here is a callback, so call it maybe?';
quotes[2] = 'libuv is for C projects that miss the joy of javascript callback hell.';


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
