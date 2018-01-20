'use strict'

import jQuery from 'jQuery'

jQuery($ => {

  // Intro Functions.
  const intro = () => {
    const intro01 = callBack => {
      const target = document.querySelectorAll('.fn-txt-heading02')
      const tLen = target.length
      for (let i = 0; i < tLen; i++) {
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
        for (let i = 0; i < tLen; i++) {
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
      }, 5500)
      callBack()
    }

    const intro05 = () => {
      const target = document.querySelector('.fn-angle-down')
      setTimeout(() => {
        target.classList.add('is-active')
      }, 6000)
    }

    setTimeout(() => {
      intro01(intro02.bind(null, intro03.bind(null, intro04.bind(null, intro05.bind(null)))))
    }, 1250)
  }

  intro()
})
