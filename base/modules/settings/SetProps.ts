/*

 SetProps.ts

*/
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
  set setHeight(setWH: number) {
    this.WH = setWH
  }
  set setScrollProps01(t1: HTMLElement | null) {
    this.scrollProps01 = t1
  }
  set setScrollProps02(t2: number) {
    this.scrollProps02 = t2
  }
  set setScrollProps03(t3: number) {
    this.scrollProps03 = t3
  }
  set setScrollProps04(t4: number) {
    this.scrollProps04 = t4
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
