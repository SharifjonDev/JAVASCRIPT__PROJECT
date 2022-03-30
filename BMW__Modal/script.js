'use strict';

const modal0 = document.querySelector('.modal--0');
const modal1 = document.querySelector('.modal--1');
const modal2 = document.querySelector('.modal--2');
const modal3 = document.querySelector('.modal--3');
const modal4 = document.querySelector('.modal--4');
const modal5 = document.querySelector('.modal--5');
const modal6 = document.querySelector('.modal--6');
const show0 = document.querySelector('.show-0');
const show1 = document.querySelector('.show-1');
const show2 = document.querySelector('.show-2');
const show3 = document.querySelector('.show-3');
const show4 = document.querySelector('.show-4');
const show5 = document.querySelector('.show-5');
const show6 = document.querySelector('.show-6');
const closeModal0 = document.querySelector('.closeModal0');
const closeModal1 = document.querySelector('.closeModal1');
const closeModal2 = document.querySelector('.closeModal2');
const closeModal3 = document.querySelector('.closeModal3');
const closeModal4 = document.querySelector('.closeModal4');
const closeModal5 = document.querySelector('.closeModal5');
const closeModal6 = document.querySelector('.closeModal6');
const overlay = document.querySelector('.overlay');

//zero
const showModal0 = () => {
  modal0.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalZero = () => {
  modal0.classList.add('hidden');
  overlay.classList.add('hidden');
};

show0.addEventListener('click', showModal0);

closeModal0.addEventListener('click', closeModalZero);
overlay.addEventListener('click', closeModalZero);

//One
const showModal1 = () => {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalOne = () => {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
};

show1.addEventListener('click', showModal1);

closeModal1.addEventListener('click', closeModalOne);
overlay.addEventListener('click', closeModalOne);

//two
const showModal2 = () => {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalTwo = () => {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};

show2.addEventListener('click', showModal2);

closeModal2.addEventListener('click', closeModalTwo);
overlay.addEventListener('click', closeModalTwo);

//three
const showModal3 = () => {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalThree = () => {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

show3.addEventListener('click', showModal3);

closeModal3.addEventListener('click', closeModalThree);
overlay.addEventListener('click', closeModalThree);

//four
const showModal4 = () => {
  modal4.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFour = () => {
  modal4.classList.add('hidden');
  overlay.classList.add('hidden');
};

show4.addEventListener('click', showModal4);

closeModal4.addEventListener('click', closeModalFour);
overlay.addEventListener('click', closeModalFour);

//five
/*const showModal5 = () => {
  modal5.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFive = () => {
  modal5.classList.add('hidden');
  overlay.classList.add('hidden');
};

show5.addEventListener('click', showModal5);

closeModal5.addEventListener('click', closeModalFive);
overlay.addEventListener('click', closeModalFive);

//six
const showModal6 = () => {
  modal6.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalSix = () => {
  modal6.classList.add('hidden');
  overlay.classList.add('hidden');
};

show6.addEventListener('click', showModal6);

closeModal6.addEventListener('click', closeModalSix);
overlay.addEventListener('click', closeModalSix);*/
