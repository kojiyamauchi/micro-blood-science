/*

 AnchorLink.ts

*/

// Import Package Modules.
import jump from 'jump.js'

export default class AnchorLink {
  // Types.
  target: NodeListOf<HTMLElement>

  constructor() {
    this.target = document.querySelectorAll('.fn-anchor')
  }

  callCore() {
    Array.from(this.target).map(info => {
      info.onclick = (event: MouseEvent) => {
        const getAnchor = info.dataset.anchor
        jump(`.${getAnchor}`)
        event.preventDefault()
      }
    })
  }
}
