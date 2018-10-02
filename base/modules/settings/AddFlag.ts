/*

 AddFlag.ts

*/
export default class AddFlag {
  target: HTMLElement
  BP: number
  WW: number

  constructor() {
    this.target = document.body
    this.BP = 768
    this.WW = window.innerWidth
  }

  coreFunc() {
    if (this.WW >= this.BP) {
      this.target.classList.add('pc')
      this.target.classList.remove('sp')
    } else if (this.WW < this.BP) {
      this.target.classList.add('sp')
      this.target.classList.remove('pc')
    }
    window.addEventListener('load', this.coreFunc, false)
    window.addEventListener('resize', this.coreFunc, false)
  }
}
