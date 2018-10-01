// Import Package Modules.
import emergence from 'emergence.js'
import ModalVideo from 'modal-video'

// Import Modules.
import addFlag from './modules/settings/addFlag'
import eventDefault from './modules/settings/eventDefault'
import introductions from './modules/introductions/introductions'
import checkScroll from './modules/scroll/checkScroll'
import anchorLink from './modules/scroll/anchorLink'
import floatings from './modules/floatings/floatings'
import mailValidation from './modules/mail/mailValidation'
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
floatings()
mailValidation()
message()
