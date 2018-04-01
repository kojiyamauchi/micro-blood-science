'use strict'

// Introduction Functions.
const introductions = () => {

  const flagTarget = document.body
  const flagEN = flagTarget.classList.contains('en')
  const flagCN = flagTarget.classList.contains('cn')

  // Displayed Heading Functions.
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

  // Displayed Letters Background Functions.
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

  // Displayed Letters Functions.
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

  // Displayed Floating Button Functions.
  const intro04 = () => {
    const target = document.querySelectorAll('.fn-button-floating')
    const targetLen = target.length
    const flagDevice = flagTarget.classList.contains('sp')
    if(flagEN) {
      if(flagDevice) {
        setTimeout(() => {
          for(let i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 8500)
      } else {
        setTimeout(() => {
          for(let i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 13500)
      }
    } else if(flagCN) {
      if(flagDevice) {
        setTimeout(() => {
          for(let i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 6125)
      } else {
        setTimeout(() => {
          for(let i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 6125)
      }
    } else {
      if(flagDevice) {
        setTimeout(() => {
          for(let i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 5250)
      } else {
        setTimeout(() => {
          for(let i = 0; i < targetLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 8100)
      }
    }
  }

  // Concatenate All Functions.
  setTimeout(() => {
    intro01(intro02.bind(null, intro03.bind(null, intro04.bind(null))))
  }, 1250)

}

export default introductions
