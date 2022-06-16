'use strict';

let screen = document.querySelector('.screen');
let td = document.querySelectorAll('td');

td.forEach(function (tdTeg) {
  tdTeg.addEventListener('click', function (e) {
    let label = e.target.innerText;
    if (label == 'C') {
      screen.value = '';
    } else if (label == '=') {
      screen.value = eval(screen.value);
    } else {
      screen.value += label;
    }
  });
});
