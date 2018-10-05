// Import Package Modules.
import emergence from 'emergence.js'
import ModalVideo from 'modal-video'

// Import Modules.
import Introductions from '@/base/modules/introductions/Introductions'
// import AddFlag from '@/base/modules/settings/AddFlag'
// import EventDefault from '@/base/modules/settings/EventDefault'
// import CheckScroll from '@/base/modules/scroll/CheckScroll'
// import AnchorLink from '@/base/modules/scroll/AnchorLink'
// import Floatings from '@/base/modules/floatings/Floatings'
// import MailValidation from '.@/base/modules/mail/MailValidation'
// import Message from '.@/base/modules/mail/Message'

// emergence.js Init.
emergence.init({ reset: false })

// Created Instance.
const modalVideo = new ModalVideo('.js-modal-video')
const introductions = new Introductions()

// Requrie Instance.
modalVideo()
introductions()
