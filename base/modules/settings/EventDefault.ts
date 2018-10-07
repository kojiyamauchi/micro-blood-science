/*

 EventDefault.ts

*/
export default class EventDefault {
  target01: HTMLElement | null
  target02: HTMLElement | null

  constructor() {
    this.target01 = document.querySelector('.fn-movie01')
    this.target02 = document.querySelector('.fn-movie02')
  }

  initFunc(event: any) {
    event.preventDefault()
  }

  callFunc() {
    this.target01!.addEventListener('click', this.initFunc, false)
    this.target02!.addEventListener('click', this.initFunc, false)
  }
}
