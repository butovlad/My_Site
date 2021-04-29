let message = document.querySelector('h1');
let button = document.querySelector('.button-click');
let name = document.querySelector('.subscription-name');
let age = document.querySelector('.subscription-age');
button.onclick = function() {
  message.textContent = 'Здравствуйте, ' + name.value + '! ' +
  'Ваш вораст: ' + age.value;
};
