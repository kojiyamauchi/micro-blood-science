'use strict'

// Around Scroll Functions.
const checkScroll = () => {
  const coreFunc = () => {
    const target01 = document.querySelector('.fn-button-floating')
    const target02 = document.querySelector('.fn-txt-scoll')
    const target03 = document.querySelector('.fn-angle-down')
    const target04 = document.querySelector('.fn-area-about')
    const target05 = document.querySelector('.fn-area-member')
    const target06 = document.querySelector('.fn-footer')
    const target07 = document.querySelector('.fn-anchor-link01')
    const target08 = document.querySelector('.fn-anchor-link02')
    const t04Offset = target04.getBoundingClientRect()
    const t05Offset = target05.getBoundingClientRect()
    const t06Offset = target06.getBoundingClientRect()
    const WH = window.innerHeight
    if (t06Offset.top < WH) {
      target01.classList.add('is-scroll-top')
      target01.classList.add('is-page-top')
      target02.innerText = 'Page Top'
      target03.classList.remove('fa-angle-double-down')
      target03.classList.add('fa-angle-double-up')
    } else {
      target01.classList.remove('is-scroll-top')
      target01.classList.remove('is-page-top')
      target02.innerText = 'Scroll'
      target03.classList.remove('fa-angle-double-up')
      target03.classList.add('fa-angle-double-down')
    }
    if (t04Offset.top <= 0 && t05Offset.top > 0) {
      target07.classList.add('is-current')
    } else {
      target07.classList.remove('is-current')
    }
    if (t05Offset.top <= 0) {
      target08.classList.add('is-current')
    } else {
      target08.classList.remove('is-current')
    }
  }
  window.addEventListener('scroll', coreFunc, false)
}

export default checkScroll
