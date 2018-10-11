/*

 App.ts

*/

// Import Modules.
import Introductions from '@/base/modules/introductions/Introductions'
import EventDefault from '@/base/modules/settings/EventDefault'
import AnchorLink from '@/base/modules/scroll/AnchorLink'
import Floatings from '@/base/modules/floatings/Floatings'
import MailValidation from '@/base/modules/mail/MailValidation'
import Message from '@/base/modules/mail/Message'
import AddFlag from '@/base/modules/settings/AddFlag'
import CheckScroll from '@/base/modules/scroll/CheckScroll'

// Import Interface.
import { ScrollPropsTypes } from '@/types/interface/'

export default class App {
  // Types.
  introductions: Introductions
  eventDefault: EventDefault
  anchorLink: AnchorLink
  floatings: Floatings
  mailValidation: MailValidation
  message: Message
  addFlag: AddFlag
  checkScroll: CheckScroll

  constructor() {
    this.introductions = new Introductions()
    this.eventDefault = new EventDefault()
    this.anchorLink = new AnchorLink()
    this.floatings = new Floatings()
    this.mailValidation = new MailValidation()
    this.message = new Message()
    this.addFlag = new AddFlag()
    this.checkScroll = new CheckScroll()
  }

  init() {
    this.introductions.callIntro()
    this.eventDefault.callCore()
    this.anchorLink.callCore()
    this.floatings.callCore()
    this.mailValidation.callCore()
    this.message.callCore()
  }

  domContentLoaded() {
    // No Method.
  }

  load(getWW: number) {
    this.addFlag.branches(getWW)
  }

  resize(getWW: number) {
    this.addFlag.branches(getWW)
  }

  scroll(getProps: ScrollPropsTypes) {
    this.checkScroll.branches(getProps)
  }
}
