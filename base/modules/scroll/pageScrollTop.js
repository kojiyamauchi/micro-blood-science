'use strict'

// Import Jump.js.
import jump from 'jump.js'

// Page Top Scroll Functions.
const pageScrollTop = () => {
  const target = document.querySelector('.fn-button-floating')
  target.addEventListener('click', () => {
    const clsCheck = target.classList.contains('is-scroll-top')
    if (clsCheck) {
      jump('.fn-scroll-top')
    }
  })
}

export default pageScrollTop
