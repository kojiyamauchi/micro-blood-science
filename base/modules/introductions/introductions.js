'use strict'

// Introduction Functions.
const introduction = () => {
  const intro01 = callBack => {
    const target = document.querySelectorAll('.fn-txt-heading02-1')
    const tLen = target.length
    for (let i = 0; i < tLen; i++) {
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
      for (let i = 0; i < tLen; i++) {
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
      for (let i = 0; i < tLen01; i++) {
        setTimeout(() => {
          target01[i].classList.add('is-active')
        }, i * 40)
      }
      for (let i = 0; i < tLen02; i++) {
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
    if (flag) {
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

export default introduction
