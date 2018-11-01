/*

 Introductions.ts

*/

export default class Introductions {
  // Types.
  flagTarget: HTMLElement
  flagEN: boolean
  flagCN: boolean
  heading02: NodeListOf<HTMLElement>
  lettersBG: NodeListOf<HTMLElement>
  lettersPC: NodeListOf<HTMLElement>
  lettersSP: NodeListOf<HTMLElement>
  floating: NodeListOf<HTMLElement>

  constructor() {
    this.flagTarget = document.body
    this.flagEN = this.flagTarget.classList.contains('en')
    this.flagCN = this.flagTarget.classList.contains('cn')
    this.heading02 = document.querySelectorAll('.fn-txt-heading02-1')
    this.lettersBG = document.querySelectorAll('.fn-letters-inner')
    this.lettersPC = document.querySelectorAll('.fn-txt-letters-pc')
    this.lettersSP = document.querySelectorAll('.fn-txt-letters-sp')
    this.floating = document.querySelectorAll('.fn-button-floating')
  }

  // Intro1, Displayed Heading Functions.
  intro01() {
    // Core Function.
    const coreFunction = (delay: number) => {
      Array.from(this.heading02).map((info, index) => {
        setTimeout(() => {
          info.classList.add('is-active')
        }, index * delay)
      })
    }
    // Branches.
    if (this.flagEN) {
      coreFunction(15)
    } else if (this.flagCN) {
      coreFunction(30)
    } else {
      coreFunction(30)
    }
  }

  // Intro2, Displayed Letters Background Functions.
  intro02() {
    // Core Function.
    const coreFunction = (delay: number) => {
      Array.from(this.lettersBG).map(info => {
        setTimeout(() => {
          info.classList.add('is-active')
        }, delay)
      })
    }
    // Branches.
    if (this.flagEN) {
      coreFunction(525)
    } else if (this.flagCN) {
      coreFunction(700)
    } else {
      coreFunction(800)
    }
  }

  // Intro3, Displayed Letters Functions.
  intro03() {
    // Core Function.
    const coreFunction = (
      delayPC: number,
      delaySP: number,
      delayWrapper: number
    ) => {
      setTimeout(() => {
        Array.from(this.lettersPC).map((info, index) => {
          setTimeout(() => {
            info.classList.add('is-active')
          }, index * delayPC)
        })
        Array.from(this.lettersSP).map((info, index) => {
          setTimeout(() => {
            info.classList.add('is-active')
          }, index * delaySP)
        })
      }, delayWrapper)
    }
    // Branches.
    if (this.flagEN) {
      coreFunction(30, 30, 1000)
    } else if (this.flagCN) {
      coreFunction(40, 40, 1250)
    } else {
      coreFunction(40, 40, 1250)
    }
  }

  // Intro4, Displayed Floating Button Functions.
  intro04() {
    // When Before Start Introduction04, Check Device.
    const flagDevice = this.flagTarget.classList.contains('sp')
    // Core Function.
    const coreFunction = (delay: number) => {
      Array.from(this.floating).map(info => {
        setTimeout(() => {
          info.classList.add('is-active')
        }, delay)
      })
    }
    // Branches.
    if (this.flagEN) {
      if (flagDevice) {
        coreFunction(9500)
      } else {
        coreFunction(14500)
      }
    } else if (this.flagCN) {
      if (flagDevice) {
        coreFunction(7375)
      } else {
        coreFunction(7500)
      }
    } else {
      if (flagDevice) {
        coreFunction(6500)
      } else {
        coreFunction(9500)
      }
    }
  }

  // Call Intro.
  callIntro() {
    setTimeout(() => {
      this.intro01()
      this.intro02()
      this.intro03()
      this.intro04()
    }, 1250)
  }
}
