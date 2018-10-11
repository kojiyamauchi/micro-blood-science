/*

 core.js

*/

// Import Package Modules.
import emergence from 'emergence.js'
import ModalVideo from 'modal-video'

// Import Modules.
import App from '@/base/modules/App'
import SetStates from '@/base/modules/state/SetStates'

// Created Instance.
const modalVideo = new ModalVideo('.js-modal-video') // eslint-disable-line no-unused-vars
const app = new App()
const setStates = new SetStates()

// Initial.
emergence.init({ reset: false })
app.init()

// DOM Content Loaded.
window.addEventListener('DOMContentLoaded', () => {
  // No Method.
})

// Load.
window.addEventListener('load', () => {
  // Call Load Method. When Window Reload, Fetch State of View.
  app.load(setStates.getWidth)
})

// Resize.
window.addEventListener('resize', () => {
  // Set View State.
  setStates.setWidth = document.body.clientWidth
  // Call Resize Method. When Window Resize, Fetch State of View.
  app.resize(setStates.getWidth)
})

// Scroll.
window.addEventListener('scroll', () => {
  // Set View State.
  setStates.setScroll = [
    window.innerHeight,
    document.querySelector('.fn-angle-down'),
    document.querySelector('.fn-area-about').getBoundingClientRect().top,
    document.querySelector('.fn-area-member').getBoundingClientRect().top,
    document.querySelector('.fn-footer').getBoundingClientRect().top
  ]
  // Call Scroll Method. When Window Scroll, Fetch State of View.
  app.scroll(setStates.getScroll)
})
