/*

 AnchorLink.ts

*/
import jump from 'jump.js'

// Anchor Link Scroll Functions.
export default class AnchorLink {
  // Types.
  target: NodeListOf<HTMLElement>

  constructor() {
    this.target = document.querySelectorAll('.fn-anchor')
  }

  callFunc() {
    Array.from(this.target).map(info => {
      info.onclick = (event: MouseEvent) => {
        const getAnchor = info.dataset.anchor
        jump(`.${getAnchor}`)
        event.preventDefault()
      }
    })
  }
}
