/*

 CheckScroll.ts

*/

// Import Interface.
import { ScrollStateTypes } from '@/types/interface/'

export default class CheckScroll {
  // Types.
  target01: HTMLElement | null
  target02: HTMLElement | null
  target03: HTMLElement | null
  target04: HTMLElement | null
  target05: HTMLElement | null

  constructor() {
    this.target01 = document.querySelector('.fn-button-floating-translate')
    this.target02 = document.querySelector('.fn-button-floating-page-top')
    this.target03 = document.querySelector('.fn-txt-scoll')
    this.target04 = document.querySelector('.fn-anchor-link01')
    this.target05 = document.querySelector('.fn-anchor-link02')
  }

  branches(getScrollState: ScrollStateTypes) {
    if (getScrollState[4] < getScrollState[0]) {
      this.target01!.classList.add('is-page-top')
      this.target02!.classList.add('is-scroll-top')
      this.target02!.classList.add('is-page-top')
      this.target03!.innerText = `Page Top`
      getScrollState[1]!.classList.remove('fa-angle-double-down')
      getScrollState[1]!.classList.add('fa-angle-double-up')
    } else {
      this.target01!.classList.remove('is-page-top')
      this.target02!.classList.remove('is-scroll-top')
      this.target02!.classList.remove('is-page-top')
      this.target03!.innerText = `Scroll`
      getScrollState[1]!.classList.remove('fa-angle-double-up')
      getScrollState[1]!.classList.add('fa-angle-double-down')
    }
    if (getScrollState[2] <= 0 && getScrollState[3] > 0) {
      this.target04!.classList.add('is-current')
    } else {
      this.target04!.classList.remove('is-current')
    }
    if (getScrollState[3] <= 0) {
      this.target05!.classList.add('is-current')
    } else {
      this.target05!.classList.remove('is-current')
    }
  }
}
