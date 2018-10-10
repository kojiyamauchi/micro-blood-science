/*

 SetProps.ts

*/

// Import Interface.
import { ScrollPropsTypes } from '@/types/interface/'

export default class SetProps {
  // Types.
  WW: number
  WH: number
  scrollProps01!: HTMLElement | null
  scrollProps02: number
  scrollProps03: number
  scrollProps04: number

  constructor() {
    this.WW = window.innerWidth
    this.WH = window.innerHeight
    this.scrollProps01 = document.querySelector('.fn-angle-down')
    this.scrollProps02 = document
      .querySelector('.fn-area-about')!
      .getBoundingClientRect().top
    this.scrollProps03 = document
      .querySelector('.fn-area-member')!
      .getBoundingClientRect().top
    this.scrollProps04 = document
      .querySelector('.fn-footer')!
      .getBoundingClientRect().top
  }

  set setWidth(setWW: number) {
    this.WW = setWW
  }
  set setScrollProps(propsValue: ScrollPropsTypes) {
    this.WH = propsValue[0]
    this.scrollProps01 = propsValue[1]
    this.scrollProps02 = propsValue[2]
    this.scrollProps03 = propsValue[3]
    this.scrollProps04 = propsValue[4]
  }

  get getWidth() {
    return this.WW
  }
  get getScrollProps() {
    return [
      this.WH,
      this.scrollProps01,
      this.scrollProps02,
      this.scrollProps03,
      this.scrollProps04
    ]
  }
}
