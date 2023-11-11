'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
// function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// })

btnCloseModal.addEventListener('click', closeModal);

//  function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');};

overlay.addEventListener('click', closeModal);
//  function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
