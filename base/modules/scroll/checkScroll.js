// Around Scroll Functions.
const checkScroll = () => {
  const coreFunc = () => {
    const target01 = document.querySelector('.fn-button-floating-translate')
    const target02 = document.querySelector('.fn-button-floating-page-top')
    const target03 = document.querySelector('.fn-txt-scoll')
    const target04 = document.querySelector('.fn-angle-down')
    const target05 = document.querySelector('.fn-area-about')
    const target06 = document.querySelector('.fn-area-member')
    const target07 = document.querySelector('.fn-footer')
    const target08 = document.querySelector('.fn-anchor-link01')
    const target09 = document.querySelector('.fn-anchor-link02')
    const t05Offset = target05.getBoundingClientRect()
    const t06Offset = target06.getBoundingClientRect()
    const t07Offset = target07.getBoundingClientRect()
    const WH = window.innerHeight
    if (t07Offset.top < WH) {
      target01.classList.add('is-page-top')
      target02.classList.add('is-scroll-top')
      target02.classList.add('is-page-top')
      target03.innerText = 'Page Top'
      target04.classList.remove('fa-angle-double-down')
      target04.classList.add('fa-angle-double-up')
    } else {
      target01.classList.remove('is-page-top')
      target02.classList.remove('is-scroll-top')
      target02.classList.remove('is-page-top')
      target03.innerText = 'Scroll'
      target04.classList.remove('fa-angle-double-up')
      target04.classList.add('fa-angle-double-down')
    }
    if (t05Offset.top <= 0 && t06Offset.top > 0) {
      target08.classList.add('is-current')
    } else {
      target08.classList.remove('is-current')
    }
    if (t06Offset.top <= 0) {
      target09.classList.add('is-current')
    } else {
      target09.classList.remove('is-current')
    }
  }
  window.addEventListener('scroll', coreFunc, false)
}

export default checkScroll
