/*

 Message.ts

*/
export default class Message {
  getURL: string
  target: HTMLElement | null
  searchWord: string

  constructor() {
    this.getURL = window.location.hash
    this.target = document.querySelector('.fn-thanks-message')
    this.searchWord = `#completed_mail`
  }

  coreFunc() {
    if (this.getURL.indexOf(this.searchWord) > -1) {
      this.target!.classList.add('is-active')
      window.history.replaceState(null, null!, ' ')
      setTimeout(() => {
        this.target!.classList.remove('is-active')
      }, 5000)
    }
  }
}
