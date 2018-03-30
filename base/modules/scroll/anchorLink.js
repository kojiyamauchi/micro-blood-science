'use strict'

// Import Jump.js.
import jump from 'jump.js'

// Anchor Link Scroll Functions.
const anchorLink = () => {
  const target = document.querySelectorAll('.fn-anchor')
  const targetLen = target.length
  for(let i = 0; i < targetLen; i++){
    target[i].onclick = event => {
      const getAnchor = target[i].dataset.anchor
      jump(`.${getAnchor}`)
      event.preventDefault()
    }
  }
}

export default anchorLink
