'use strict'

// Import Jump.js.
import jump from 'jump.js'

// Clicked Floating Button Functions.
const floatings = () => {
  const flagTarget = document.body
  const floatingTranslate = document.querySelector('.fn-button-floating-translate')
  const targetTranslate = document.querySelector('.link-translate-wrapper')
  const floatingPageTop = document.querySelector('.fn-button-floating-page-top')
  floatingTranslate.addEventListener('click', event => {
    event.stopPropagation()
    targetTranslate.classList.toggle('is-active')
  })
  floatingTranslate.addEventListener('mouseover', () => {
    const flagDevice = flagTarget.classList.contains('sp')
    if(!flagDevice) {
      targetTranslate.classList.add('is-active')
    }
  })
  floatingTranslate.addEventListener('mouseout', () => {
    const flagDevice = flagTarget.classList.contains('sp')
    if(!flagDevice) {
      targetTranslate.classList.remove('is-active')
    }
  })
  floatingPageTop.addEventListener('click', () => {
    const clsCheck = floatingPageTop.classList.contains('is-scroll-top')
    if(clsCheck) {
      jump('.fn-scroll-top')
    }
  })
}

export default floatings