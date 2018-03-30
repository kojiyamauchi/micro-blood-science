'use strict'

// Add Flag on Body Functions.
const addFlag = () => {
  const target = document.body
  const BP = 768
  const coreFunc = () => {
    const WW = window.innerWidth
    if (WW >= BP) {
      target.classList.add('pc')
      target.classList.remove('sp')
    } else if (WW < BP) {
      target.classList.add('sp')
      target.classList.remove('pc')
    }
  }
  window.addEventListener('load', coreFunc, false)
  window.addEventListener('resize', coreFunc, false)
}

export default addFlag
