/*

 Introductions.ts

*/
export default class Introductions {
  // Types.
  flagTarget: HTMLElement
  flagEN: boolean
  flagCN: boolean
  flagDevice: boolean
  heading02: NodeListOf<HTMLElement>
  lettersBG: NodeListOf<HTMLElement>
  lettersPC: NodeListOf<HTMLElement>
  lettersSP: NodeListOf<HTMLElement>
  floating: NodeListOf<HTMLElement>

  constructor() {
    this.flagTarget = document.body
    this.flagEN = this.flagTarget.classList.contains('en')
    this.flagCN = this.flagTarget.classList.contains('cn')
    this.flagDevice = this.flagTarget.classList.contains('sp')
    this.heading02 = document.querySelectorAll('.fn-txt-heading02-1')
    this.lettersBG = document.querySelectorAll('.fn-letters-inner')
    this.lettersPC = document.querySelectorAll('.fn-txt-letters-pc')
    this.lettersSP = document.querySelectorAll('.fn-txt-letters-sp')
    this.floating = document.querySelectorAll('.fn-button-floating')
    this.callIntro()
  }

  // Intro1, Displayed Heading Functions.
  intro01() {
    // Core Function.
    const coreFunction = (delay: number) => {
      Array.from(this.heading02).map((info, index) => {
        setTimeout(() => {
          return info.classList.add('is-active')
        }, index * delay)
      })
    }
    // Branches.
    if (this.flagEN) {
      return coreFunction(15)
    } else if (this.flagCN) {
      return coreFunction(30)
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
          return info.classList.add('is-active')
        }, delay)
      })
    }
    // Branches.
    if (this.flagEN) {
      return coreFunction(525)
    } else if (this.flagCN) {
      return coreFunction(700)
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
            return info.classList.add('is-active')
          }, index * delayPC)
        })
        Array.from(this.lettersSP).map((info, index) => {
          setTimeout(() => {
            return info.classList.add('is-active')
          }, index * delaySP)
        })
      }, delayWrapper)
    }
    // Branches.
    if (this.flagEN) {
      return coreFunction(30, 30, 1000)
    } else if (this.flagCN) {
      return coreFunction(40, 40, 1250)
    } else {
      coreFunction(40, 40, 1250)
    }
  }

  // Intro4, Displayed Floating Button Functions.
  intro04() {
    // Core Function.
    const coreFunction = (delay: number) => {
      Array.from(this.floating).map(info => {
        setTimeout(() => {
          return info.classList.add('is-active')
        }, delay)
      })
    }
    // Branches.
    if (this.flagEN) {
      if (this.flagDevice) {
        return coreFunction(9500)
      } else {
        coreFunction(14500)
      }
    } else if (this.flagCN) {
      if (this.flagDevice) {
        return coreFunction(7375)
      } else {
        coreFunction(7500)
      }
    } else {
      if (this.flagDevice) {
        return coreFunction(6500)
      } else {
        coreFunction(9500)
      }
    }
  }

  // Concatenate Intro & Await Intro.
  concatenateIntro() {
    const awaitIntro = async () => {
      const awaitIntro01 = await this.intro01()
      const awaitIntro02 = await this.intro02()
      const awaitIntro03 = await this.intro03()
      const awaitIntro04 = await this.intro04()
      return [awaitIntro01, awaitIntro02, awaitIntro03, awaitIntro04]
    }
    return awaitIntro()
  }

  // Call Intro.
  callIntro() {
    setTimeout(() => {
      return this.concatenateIntro()
    }, 1250)
  }
}
