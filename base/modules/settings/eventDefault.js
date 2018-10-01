// Moive Contents Click Event Default Functions.
const eventDefault = () => {
  const target01 = document.querySelector('.fn-movie01')
  const target02 = document.querySelector('.fn-movie02')
  const coreFunc = event => {
    event.preventDefault()
  }
  target01.addEventListener('click', coreFunc, false)
  target02.addEventListener('click', coreFunc, false)
}

export default eventDefault
