/*

 Floatings.ts

*/

// Import Package Modules.
import jump from 'jump.js'

export default class Floatings {
  // Types.
  flagTarget: HTMLElement
  floatingTranslate: HTMLElement | null
  targetTranslate: HTMLElement | null
  floatingPageTop: HTMLElement | null

  constructor() {
    this.flagTarget = document.body
    this.floatingTranslate = document.querySelector(
      '.fn-button-floating-translate'
    )
    this.targetTranslate = document.querySelector('.link-translate-wrapper')
    this.floatingPageTop = document.querySelector(
      '.fn-button-floating-page-top'
    )
  }

  callCore() {
    this.floatingTranslate!.addEventListener('click', (event: MouseEvent) => {
      event.stopPropagation()
      this.targetTranslate!.classList.toggle('is-active')
    })

    this.floatingTranslate!.addEventListener('mouseover', () => {
      const flagDevice = this.flagTarget.classList.contains('sp')
      if (!flagDevice) {
        this.targetTranslate!.classList.add('is-active')
      }
    })

    this.floatingTranslate!.addEventListener('mouseout', () => {
      const flagDevice = this.flagTarget.classList.contains('sp')
      if (!flagDevice) {
        this.targetTranslate!.classList.remove('is-active')
      }
    })

    this.floatingPageTop!.addEventListener('click', () => {
      const clsCheck = this.floatingPageTop!.classList.contains('is-scroll-top')
      if (clsCheck) {
        jump('.fn-scroll-top')
      }
    })
  }
}
