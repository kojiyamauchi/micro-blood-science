'use strict'

import emergence from 'emergence.js'
import jQuery from 'jQuery'
import ModalVideo from 'modal-video'

jQuery($ => {

  // emergence.js init.
  emergence.init({ reset: false })

  // Created Modal Video Instance.
  new ModalVideo('.js-modal-video')

  // Intro Functions.
  const intro = () => {
    const intro01 = callBack => {
      const target = document.querySelectorAll('.fn-txt-heading02-1')
      const tLen = target.length
      for(let i = 0; i < tLen; i++) {
        setTimeout(() => {
          target[i].classList.add('is-active')
        }, i * 30)
      }
      callBack()
    }

    const intro02 = callBack => {
      const target = document.querySelector('.fn-letters-inner')
      setTimeout(() => {
        target.classList.add('is-active')
        callBack()
      }, 800)
    }

    const intro03 = callBack => {
      const target = document.querySelectorAll('.fn-txt-letters')
      const tLen = target.length
      setTimeout(() => {
        for(let i = 0; i < tLen; i++) {
          setTimeout(() => {
            target[i].classList.add('is-active')
          }, i * 40)
        }
        callBack()
      }, 850)
    }

    const intro04 = callBack => {
      const target = document.querySelector('.fn-button-floating')
      setTimeout(() => {
        target.classList.add('is-active')
      }, 6500)
      callBack()
    }

    setTimeout(() => {
      intro01(intro02.bind(null, intro03.bind(null, intro04.bind(null))))
    }, 1250)
  }

  // Replace Text Functions.
  const repTxt = () => {
    const target = document.querySelector('.mdl-textfield__label')
    const inTxt = 'メールアドレスを入力してください。'
    target.innerText = inTxt
  }

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
      if(t06Offset.top < WH) {
        target01.classList.add('is-scroll-top')
        target01.classList.add('is-page-top')
        target02.innerHTML = 'Page Top'
        target03.classList.remove('fa-angle-double-down')
        target03.classList.add('fa-angle-double-up')
      } else {
        target01.classList.remove('is-scroll-top')
        target01.classList.remove('is-page-top')
        target02.innerHTML = 'Scroll'
        target03.classList.remove('fa-angle-double-up')
        target03.classList.add('fa-angle-double-down')
      }
      if(t04Offset.top <= 0 && t05Offset.top > 0) {
        target07.classList.add('is-current')
      } else {
        target07.classList.remove('is-current')
      }
      if(t05Offset.top <= 0) {
        target08.classList.add('is-current')
      } else {
        target08.classList.remove('is-current')
      }
    }
    window.addEventListener('scroll', coreFunc, false)
  }

  // Page Top Scroll Functions.
  const pageScrollTop = () => {
    const target = document.querySelector('.fn-button-floating')
    target.addEventListener('click', () => {
      const clsCheck = target.classList.contains('is-scroll-top')
      if(clsCheck) {
        $('html,body').animate({
          scrollTop: 0
        }, 'swing')
      }
    }, false)
  }

  // Anchor Link Scroll Functions.
  const anchorLink = () => {
    $('a[href^="#"]').on('click', function () {
      const target = $(this)
      const href = target.attr('href')
      const anchor = $(href == '#' || href == '' ? 'html' : href)
      const position = anchor.offset().top
      $('body,html').animate({
        scrollTop: position
      }, 'swing')
      return false
    })
  }

  // Moive Contents Click Event Default Functions.
  const evtDefault = () => {
    const target01 = document.querySelector('.fn-movie01')
    //const target02 = document.querySelector('.fn-movie02')
    const coreFunc = event => {
      event.preventDefault()
    }
    target01.addEventListener('click', coreFunc, false)
    //target02.addEventListener('click', coreFunc, false)
  }

  // Thanks Message Functions.
  const thxMessage = () => {
    const getURL = window.location.hash
    const target = document.querySelector('.fn-thanks-message')
    const searchWord = '#completed_mail'
    if(getURL.indexOf(searchWord) > -1) {
      target.classList.add('is-active')
      setTimeout(() => {
        target.classList.remove('is-active')
      }, 5000)
    }
  }

  // Require All Functions.
  intro()
  repTxt()
  checkScroll()
  pageScrollTop()
  anchorLink()
  evtDefault()
  thxMessage()

})
