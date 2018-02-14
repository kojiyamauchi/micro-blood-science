'use strict'

import emergence from 'emergence.js'
import jQuery from 'jQuery'
import ModalVideo from 'modal-video'

jQuery($ => {

  // emergence.js init.
  emergence.init({ reset: false })

  // Created Modal Video Instance.
  new ModalVideo('.js-modal-video')

  // Add Flag on Body Functions.
  const addFlag = () => {
    const target = document.body
    const BP = 768
    const coreFunc = () => {
      const WW = window.innerWidth
      if (WW >= BP) {
        target.classList.add('pc');
        target.classList.remove('sp');
      } else if (WW < BP) {
        target.classList.add('sp');
        target.classList.remove('pc');
      }
    }
    window.addEventListener('load', coreFunc, false)
    window.addEventListener('resize', coreFunc, false)
  }

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
      const target = document.querySelectorAll('.fn-letters-inner')
      const tLen = target.length
      setTimeout(() => {
        for(let i = 0; i < tLen; i++) {
          target[i].classList.add('is-active')
        }
        callBack()
      }, 800)
    }

    const intro03 = callBack => {
      const target01 = document.querySelectorAll('.fn-txt-letters-pc')
      const tLen01 = target01.length
      const target02 = document.querySelectorAll('.fn-txt-letters-sp')
      const tLen02 = target02.length
      setTimeout(() => {
        for(let i = 0; i < tLen01; i++) {
          setTimeout(() => {
            target01[i].classList.add('is-active')
          }, i * 40)
        }
        for(let i = 0; i < tLen02; i++) {
          setTimeout(() => {
            target02[i].classList.add('is-active')
          }, i * 40)
        }
        callBack()
      }, 850)
    }

    const intro04 = () => {
      const flag = document.body.classList.contains('sp')
      const target = document.querySelector('.fn-button-floating')
      if(flag){
        setTimeout(() => {
          target.classList.add('is-active')
        }, 5250)
      } else {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 8100)
      }
    }

    setTimeout(() => {
      intro01(intro02.bind(null, intro03.bind(null, intro04.bind(null))))
    }, 1250)
  }

  // Replace Text Functions.
  const repTxt = () => {
    const target = document.querySelector('.fn-form-label')
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
    const target02 = document.querySelector('.fn-movie02')
    const coreFunc = event => {
      event.preventDefault()
    }
    target01.addEventListener('click', coreFunc, false)
    target02.addEventListener('click', coreFunc, false)
  }

  // Mail Validation.
  const mailValidation = () => {
    const button = document.querySelector('.fn-submit')
    const holder = document.querySelector('.fn-form-label')
    const txtfield = document.querySelector('.fn-txtfield')
    const target = document.querySelector('.fn-mail-val')
    const validation = /^[A-Za-z0-9]+[\w\.-]+@[\w\.-]+\.\w{2,}$/
    const inTxt01 = 'メールアドレスを確認してください。'
    const inTxt02 = 'メールアドレスを入力してください。'
    const coreFunc = event => {
      const val = target.value
      if(!val.match(validation)){
        holder.innerText = inTxt01
        txtfield.classList.add('is-disabled02')
        event.preventDefault()
      }
      if(val === ''){
        holder.innerText = inTxt02
        txtfield.classList.add('is-disabled02')
        event.preventDefault()
      }
    }
    button.addEventListener('click', coreFunc, false)
  }

  // Thanks Message Functions.
  const thxMessage = () => {
    const getURL = window.location.hash
    const target = document.querySelector('.fn-thanks-message')
    const searchWord = '#completed_mail'
    if(getURL.indexOf(searchWord) > -1) {
      target.classList.add('is-active')
      window.history.replaceState(null,null,' ')
      setTimeout(() => {
        target.classList.remove('is-active')
      }, 5000)
    }
  }

  // Require All Functions.
  addFlag()
  intro()
  repTxt()
  checkScroll()
  pageScrollTop()
  anchorLink()
  evtDefault()
  mailValidation()
  thxMessage()

})
