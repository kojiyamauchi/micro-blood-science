'use strict'

// Import Package Modules.
import emergence from 'emergence.js'
import ModalVideo from 'modal-video'

// Import Modules.
import addFlag from './modules/setting/addFlag'
import eventDefault from './modules/setting/eventDefault'
import introductions from './modules/introductions/introductions'
import checkScroll from './modules/scroll/checkScroll'
import anchorLink from './modules/scroll/anchorLink'
import pageScrollTop from './modules/scroll/pageScrollTop'
import validation from './modules/mail/validation'
import message from './modules/mail/message'

  // emergence.js Init.
  emergence.init({ reset: false })

  // Created Modal Video Instance.
  new ModalVideo('.js-modal-video')

  // Require All Functions.
  addFlag()
  eventDefault()
  introductions()
  checkScroll()
  anchorLink()
  pageScrollTop()
  validation()
  message()
