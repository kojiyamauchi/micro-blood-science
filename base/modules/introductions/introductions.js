'use strict'

// Introduction Functions.
const introductions = () => {

  const flagTarget = document.body
  const flagEN = flagTarget.classList.contains('en')
  const flagCN = flagTarget.classList.contains('cn')
  const flagDevice = flagTarget.classList.contains('sp')

  const intro01 = callBack => {
    const target = document.querySelectorAll('.fn-txt-heading02-1')
    const tLen = target.length
    if(flagEN) {
      for(let i = 0; i < tLen; i++) {
        setTimeout(() => {
          target[i].classList.add('is-active')
        }, i * 15)
      }
      callBack()
    } else if(flagCN) {
      for(let i = 0; i < tLen; i++) {
        setTimeout(() => {
          target[i].classList.add('is-active')
        }, i * 30)
      }
      callBack()
    } else {
      for(let i = 0; i < tLen; i++) {
        setTimeout(() => {
          target[i].classList.add('is-active')
        }, i * 30)
      }
      callBack()
    }
  }
  const intro02 = callBack => {
    const target = document.querySelectorAll('.fn-letters-inner')
    const tLen = target.length
    if(flagEN) {
      setTimeout(() => {
        for(let i = 0; i < tLen; i++) {
          target[i].classList.add('is-active')
        }
        callBack()
      }, 525)
    } else if(flagCN) {
      setTimeout(() => {
        for(let i = 0; i < tLen; i++) {
          target[i].classList.add('is-active')
        }
        callBack()
      }, 700)
    } else {
      setTimeout(() => {
        for(let i = 0; i < tLen; i++) {
          target[i].classList.add('is-active')
        }
        callBack()
      }, 800)
    }
  }

  const intro03 = callBack => {
    const target01 = document.querySelectorAll('.fn-txt-letters-pc')
    const tLen01 = target01.length
    const target02 = document.querySelectorAll('.fn-txt-letters-sp')
    const tLen02 = target02.length
    if(flagEN) {
      setTimeout(() => {
        for(let i = 0; i < tLen01; i++) {
          setTimeout(() => {
            target01[i].classList.add('is-active')
          }, i * 30)
        }
        for(let i = 0; i < tLen02; i++) {
          setTimeout(() => {
            target02[i].classList.add('is-active')
          }, i * 30)
        }
        callBack()
      }, 850)
    } else if(flagCN) {
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
    } else {
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
  }

  const intro04 = () => {
    const target = document.querySelector('.fn-button-floating')
    if(flagEN) {
      if(flagDevice) {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 5250)
      } else {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 13500)
      }
    } else if(flagCN) {
      if(flagDevice) {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 6125)
      } else {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 6125)
      }
    } else {
      if(flagDevice) {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 5250)
      } else {
        setTimeout(() => {
          target.classList.add('is-active')
        }, 8100)
      }
    }
  }

  setTimeout(() => {
    intro01(intro02.bind(null, intro03.bind(null, intro04.bind(null))))
  }, 1250)

}

export default introductions
