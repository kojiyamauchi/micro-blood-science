// Import Package Modules.
import emergence from 'emergence.js'
import ModalVideo from 'modal-video'

// Import Modules.
import App from '@/base/modules/App'
import SetProps from '@/base/modules/settings/SetProps'

// Created Instance.
const modalVideo = new ModalVideo('.js-modal-video') // eslint-disable-line no-unused-vars
const app = new App()
const setProps = new SetProps()

// emergence.js Init.
emergence.init({ reset: false })

// Init.
app.init()

// DOM Content Loaded.
window.addEventListener('DOMContentLoaded', () => {
  // No Method.
})

// Load.
window.addEventListener('load', () => {
  app.load(setProps.getWidth)
})

// Resize.
window.addEventListener('resize', () => {
  // Set.
  setProps.setWidth = window.innerWidth
  // Call Method.
  app.resize(setProps.getWidth)
})

// Scroll.
window.addEventListener('scroll', () => {
  // Set.
  setProps.setScrollProps = [
    window.innerHeight,
    document.querySelector('.fn-angle-down'),
    document.querySelector('.fn-area-about').getBoundingClientRect().top,
    document.querySelector('.fn-area-member').getBoundingClientRect().top,
    document.querySelector('.fn-footer').getBoundingClientRect().top
  ]
  // Call Method.
  app.scroll(setProps.getScrollProps)
})
