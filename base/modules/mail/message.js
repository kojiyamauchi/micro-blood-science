'use strict'

// Thanks Message Functions.
const thxMessage = () => {
  const getURL = window.location.hash
  const target = document.querySelector('.fn-thanks-message')
  const searchWord = '#completed_mail'
  if (getURL.indexOf(searchWord) > -1) {
    target.classList.add('is-active')
    window.history.replaceState(null, null, ' ')
    setTimeout(() => {
      target.classList.remove('is-active')
    }, 5000)
  }
}

export default thxMessage
