'use strict';

var common = require('jspm-test-common');

var names = [
  'Tauren',
  'Guy',
  'Sue'
];

names.forEach(function(name) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(common(name)));
  document.body.appendChild(div);
});


