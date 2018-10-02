// Import Jump.js.
import jump from 'jump.js'

// Anchor Link Scroll Functions.
export default class AnchorLink {
  target: NodeListOf<HTMLElement>
  targetLen: number

  constructor() {
    this.target = document.querySelectorAll('.fn-anchor')
    this.targetLen = this.target.length
  }

  coreFunc() {
    for (let i = 0; i < this.targetLen; i++) {
      this.target[i].onclick = (event: MouseEvent) => {
        const getAnchor = this.target[i].dataset.anchor
        jump(`.${getAnchor}`)
        event.preventDefault()
      }
    }
  }
}
