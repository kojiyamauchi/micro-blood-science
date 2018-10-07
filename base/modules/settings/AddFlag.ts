/*

 AddFlag.ts

*/
export default class AddFlag {
  // Types.
  target: HTMLElement
  BP: number
  WW: number

  constructor() {
    this.target = document.body
    this.BP = 768
    this.WW = window.innerWidth
  }

  set resizeValue(setWW: number) {
    this.WW = setWW
  }

  branches() {
    if (this.WW >= this.BP) {
      this.target.classList.add('pc')
      this.target.classList.remove('sp')
    } else if (this.WW < this.BP) {
      this.target.classList.add('sp')
      this.target.classList.remove('pc')
    }
  }
}
