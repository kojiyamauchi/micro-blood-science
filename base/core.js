// Import Package Modules.
import emergence from 'emergence.js'
import ModalVideo from 'modal-video'

// Import Modules.
import Introductions from '@/base/modules/introductions/Introductions'
import EventDefault from '@/base/modules/settings/EventDefault'
import AddFlag from '@/base/modules/settings/AddFlag'
import CheckScroll from '@/base/modules/scroll/CheckScroll'
import AnchorLink from '@/base/modules/scroll/AnchorLink'
import Floatings from '@/base/modules/floatings/Floatings'
import MailValidation from '@/base/modules/mail/MailValidation'
import Message from '@/base/modules/mail/Message'

// emergence.js Init.
emergence.init({ reset: false })

// Created Instance.
const modalVideo = new ModalVideo('.js-modal-video') // eslint-disable-line no-unused-vars
const introductions = new Introductions()
const eventDefault = new EventDefault()
const addFlag = new AddFlag()
const checkScroll = new CheckScroll()
const anchorLink = new AnchorLink()
const floatings = new Floatings()
const mailValidation = new MailValidation()
const message = new Message()

// Requrie Instance. (Default)
introductions.callIntro()
eventDefault.callCore()
anchorLink.callCore()
floatings.callCore()
mailValidation.callCore()
message.callCore()

// DOM Content Loaded.
window.addEventListener('DOMContentLoaded', () => {})

// Load.
window.addEventListener('load', () => {
  addFlag.branches()
})

// Resize.
window.addEventListener('resize', () => {
  addFlag.resizeEvent = window.innerWidth
  addFlag.branches()
})

// Scroll.
window.addEventListener('scroll', () => {
  checkScroll.setNode = document.querySelector('.fn-angle-down')
  checkScroll.setT5 = document
    .querySelector('.fn-area-about')
    .getBoundingClientRect().top
  checkScroll.setT6 = document
    .querySelector('.fn-area-member')
    .getBoundingClientRect().top
  checkScroll.setT7 = document
    .querySelector('.fn-footer')
    .getBoundingClientRect().top
  checkScroll.setWH = window.innerHeight
  checkScroll.branches()
})
