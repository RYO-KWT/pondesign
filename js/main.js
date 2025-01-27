'use strict';
{
  document.addEventListener('DOMContentLoaded', () => {

    // header
    // back-to-top
    const header = document.querySelector('.js-header');
    const backToTop = document.querySelector('.js-c-back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('is-active');
        backToTop.classList.add('is-active');
      } else {
        header.classList.remove('is-active');
        backToTop.classList.remove('is-active');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });


    // hamburger
    const hamburger = document.querySelector('.js-hamburger');
    const nav = document.querySelector('.js-header__nav');
    const body = document.querySelector('.js-body');

    const toggleNav = () => {
      hamburger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
      body.classList.toggle('is-active');
    }

    hamburger.addEventListener('click', toggleNav);
    nav.addEventListener('click', toggleNav);
  });

  // swiper
  const swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
