// Moive Contents Click Event Default Functions.
export default class EventDefault {
  target01: HTMLElement | null
  target02: HTMLElement | null

  constructor() {
    this.target01 = document.querySelector('.fn-movie01')
    this.target02 = document.querySelector('.fn-movie02')
  }

  coreFunc(event: any) {
    event.preventDefault()
    this.target01!.addEventListener('click', this.coreFunc, false)
    this.target02!.addEventListener('click', this.coreFunc, false)
  }
}
