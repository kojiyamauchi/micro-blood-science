// Import Jump.js.
import jump from 'jump.js'

// Clicked Floating Button Functions.
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
        return this.targetTranslate!.classList.add('is-active')
      }
    })

    this.floatingTranslate!.addEventListener('mouseout', () => {
      const flagDevice = this.flagTarget.classList.contains('sp')
      if (!flagDevice) {
        return this.targetTranslate!.classList.remove('is-active')
      }
    })

    this.floatingPageTop!.addEventListener('click', () => {
      const clsCheck = this.floatingPageTop!.classList.contains('is-scroll-top')
      if (clsCheck) {
        return jump('.fn-scroll-top')
      }
    })
  }
}
