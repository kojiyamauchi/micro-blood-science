/*

 SetStates.ts

*/

// Import Interface.
import { ScrollStateTypes } from '@/types/interface/'

export default class SetState {
  // Types.
  WW: number
  WH: number
  scrollState01!: HTMLElement | null
  scrollState02: number
  scrollState03: number
  scrollState04: number

  constructor() {
    this.WW = window.innerWidth
    this.WH = window.innerHeight
    this.scrollState01 = document.querySelector('.fn-angle-down')
    this.scrollState02 = document
      .querySelector('.fn-area-about')!
      .getBoundingClientRect().top
    this.scrollState03 = document
      .querySelector('.fn-area-member')!
      .getBoundingClientRect().top
    this.scrollState04 = document
      .querySelector('.fn-footer')!
      .getBoundingClientRect().top
  }

  set setWidth(setWidthState: number) {
    this.WW = setWidthState
  }
  set setScroll(setScrollState: ScrollStateTypes) {
    this.WH = setScrollState[0]
    this.scrollState01 = setScrollState[1]
    this.scrollState02 = setScrollState[2]
    this.scrollState03 = setScrollState[3]
    this.scrollState04 = setScrollState[4]
  }

  get getWidth() {
    return this.WW
  }
  get getScroll() {
    return [
      this.WH,
      this.scrollState01,
      this.scrollState02,
      this.scrollState03,
      this.scrollState04
    ]
  }
}
