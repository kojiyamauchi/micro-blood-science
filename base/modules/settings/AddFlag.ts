/*

 AddFlag.ts

*/
export default class AddFlag {
  // Types.
  target: HTMLElement
  BP: number

  constructor() {
    this.target = document.body
    this.BP = 768
  }

  branches(getWidthState: number) {
    if (getWidthState >= this.BP) {
      this.target.classList.add('pc')
      this.target.classList.remove('sp')
    } else if (getWidthState < this.BP) {
      this.target.classList.add('sp')
      this.target.classList.remove('pc')
    }
  }
}
