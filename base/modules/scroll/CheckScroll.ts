/*

 CheckScroll.ts

*/
export default class CheckScroll {
  // Types.
  target01: HTMLElement | null
  target02: HTMLElement | null
  target03: HTMLElement | null
  target04: HTMLElement | null
  target05: HTMLElement | null
  target06: HTMLElement | null
  target07: HTMLElement | null
  target08: HTMLElement | null
  target09: HTMLElement | null
  t05Offset: number
  t06Offset: number
  t07Offset: number
  WH: number

  constructor() {
    this.target01 = document.querySelector('.fn-button-floating-translate')
    this.target02 = document.querySelector('.fn-button-floating-page-top')
    this.target03 = document.querySelector('.fn-txt-scoll')
    this.target04 = null
    this.target05 = document.querySelector('.fn-area-about')
    this.target06 = document.querySelector('.fn-area-member')
    this.target07 = document.querySelector('.fn-footer')
    this.target08 = document.querySelector('.fn-anchor-link01')
    this.target09 = document.querySelector('.fn-anchor-link02')
    this.t05Offset = this.target05!.getBoundingClientRect().top
    this.t06Offset = this.target06!.getBoundingClientRect().top
    this.t07Offset = this.target07!.getBoundingClientRect().top
    this.WH = window.innerHeight
  }

  set setNode(t4: HTMLElement | null) {
    this.target04 = t4
  }
  set setT5(t5: number) {
    this.t05Offset = t5
  }
  set setT6(t6: number) {
    this.t06Offset = t6
  }
  set setT7(t7: number) {
    this.t07Offset = t7
  }
  set setWH(WH: number) {
    this.WH = WH
  }

  branches() {
    this.target04 = document.querySelector('.fn-angle-down') // TODO.
    console.log(this.target04)
    if (this.t07Offset < this.WH) {
      this.target01!.classList.add('is-page-top')
      this.target02!.classList.add('is-scroll-top')
      this.target02!.classList.add('is-page-top')
      this.target03!.innerText = `Page Top`
      this.target04!.classList.remove('fa-angle-double-down')
      this.target04!.classList.add('fa-angle-double-up')
    } else {
      this.target01!.classList.remove('is-page-top')
      this.target02!.classList.remove('is-scroll-top')
      this.target02!.classList.remove('is-page-top')
      this.target03!.innerText = `Scroll`
      this.target04!.classList.remove('fa-angle-double-up')
      this.target04!.classList.add('fa-angle-double-down')
    }
    if (this.t05Offset <= 0 && this.t06Offset > 0) {
      return this.target08!.classList.add('is-current')
    } else {
      this.target08!.classList.remove('is-current')
    }
    if (this.t06Offset <= 0) {
      return this.target09!.classList.add('is-current')
    } else {
      this.target09!.classList.remove('is-current')
    }
  }
}
