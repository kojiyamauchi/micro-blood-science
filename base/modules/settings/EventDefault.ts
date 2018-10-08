/*

 EventDefault.ts

*/
export default class EventDefault {
  // Types.
  target01: HTMLElement | null
  target02: HTMLElement | null

  constructor() {
    this.target01 = document.querySelector('.fn-movie01')
    this.target02 = document.querySelector('.fn-movie02')
  }

  clickEvent(event: any) {
    event.preventDefault()
  }

  callCore() {
    this.target01!.addEventListener('click', this.clickEvent, false)
    this.target02!.addEventListener('click', this.clickEvent, false)
  }
}
