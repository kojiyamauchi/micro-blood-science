/*

 Introductions.ts

*/
export default class Introductions {
  flagTarget: HTMLElement
  flagEN: boolean
  flagCN: boolean

  constructor() {
    this.flagTarget = document.body
    this.flagEN = this.flagTarget.classList.contains('en')
    this.flagCN = this.flagTarget.classList.contains('cn')
  }

  // Displayed Heading Functions.
  coreFunc() {
    const intro01 = () => {
      const target = document.querySelectorAll('.fn-txt-heading02-1')
      const tLen = target.length
      if (this.flagEN) {
        for (let i = 0; i < tLen; i++) {
          setTimeout(() => {
            target[i].classList.add('is-active')
          }, i * 15)
        }
      } else if (this.flagCN) {
        for (let i = 0; i < tLen; i++) {
          setTimeout(() => {
            target[i].classList.add('is-active')
          }, i * 30)
        }
      } else {
        for (let i = 0; i < tLen; i++) {
          setTimeout(() => {
            target[i].classList.add('is-active')
          }, i * 30)
        }
      }
    }

    // Displayed Letters Background Functions.
    const intro02 = () => {
      const target = document.querySelectorAll('.fn-letters-inner')
      const tLen = target.length
      if (this.flagEN) {
        setTimeout(() => {
          for (let i = 0; i < tLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 525)
      } else if (this.flagCN) {
        setTimeout(() => {
          for (let i = 0; i < tLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 700)
      } else {
        setTimeout(() => {
          for (let i = 0; i < tLen; i++) {
            target[i].classList.add('is-active')
          }
        }, 800)
      }
    }

    // Displayed Letters Functions.
    const intro03 = () => {
      const target01 = document.querySelectorAll('.fn-txt-letters-pc')
      const tLen01 = target01.length
      const target02 = document.querySelectorAll('.fn-txt-letters-sp')
      const tLen02 = target02.length
      if (this.flagEN) {
        setTimeout(() => {
          for (let i = 0; i < tLen01; i++) {
            setTimeout(() => {
              target01[i].classList.add('is-active')
            }, i * 30)
          }
          for (let i = 0; i < tLen02; i++) {
            setTimeout(() => {
              target02[i].classList.add('is-active')
            }, i * 30)
          }
        }, 850)
      } else if (this.flagCN) {
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
        }, 850)
      } else {
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
        }, 850)
      }
    }

    // Displayed Floating Button Functions.
    const intro04 = () => {
      const target = document.querySelectorAll('.fn-button-floating')
      const targetLen = target.length
      const flagDevice = this.flagTarget.classList.contains('sp')
      if (this.flagEN) {
        if (flagDevice) {
          setTimeout(() => {
            for (let i = 0; i < targetLen; i++) {
              target[i].classList.add('is-active')
            }
          }, 8500)
        } else {
          setTimeout(() => {
            for (let i = 0; i < targetLen; i++) {
              target[i].classList.add('is-active')
            }
          }, 13500)
        }
      } else if (this.flagCN) {
        if (flagDevice) {
          setTimeout(() => {
            for (let i = 0; i < targetLen; i++) {
              target[i].classList.add('is-active')
            }
          }, 6125)
        } else {
          setTimeout(() => {
            for (let i = 0; i < targetLen; i++) {
              target[i].classList.add('is-active')
            }
          }, 6125)
        }
      } else {
        if (flagDevice) {
          setTimeout(() => {
            for (let i = 0; i < targetLen; i++) {
              target[i].classList.add('is-active')
            }
          }, 5250)
        } else {
          setTimeout(() => {
            for (let i = 0; i < targetLen; i++) {
              target[i].classList.add('is-active')
            }
          }, 8100)
        }
      }
    }

    // Concatenate All Functions.
    const introConatenate = async () => {
      await intro01()
      await intro02()
      await intro03()
      await intro04()
    }

    setTimeout(() => {
      introConatenate()
    }, 1250)
  }
}
