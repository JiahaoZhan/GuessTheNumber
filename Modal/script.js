'use strict';

const modal = document.querySelector('.modal');
const btns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

for (let btn of btns) {
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

document.querySelector('.close-modal').addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
