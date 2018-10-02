// Mail Validation.
export default class MailValidation {
  button: HTMLElement | null
  holder: HTMLElement | null
  txtfield: HTMLElement | null
  target: HTMLInputElement | null
  validation: RegExp
  inTxt01: string
  inTxt02: string
  inTxtEN01: string
  inTxtEN02: string
  inTxtCN01: string
  inTxtCN02: string
  flagTarget: HTMLElement
  flagEN: boolean
  flagCN: boolean

  constructor() {
    this.button = document.querySelector('.fn-submit')
    this.holder = document.querySelector('.fn-form-label')
    this.txtfield = document.querySelector('.fn-txtfield')
    this.target = document.querySelector('.fn-mail-val')
    this.validation = /^[A-Za-z0-9]+[\w\.-]+@[\w\.-]+\.\w{2,}$/
    this.inTxt01 = `メールアドレスを確認してください。`
    this.inTxt02 = `メールアドレスを入力してください。`
    this.inTxtEN01 = `Please comfirm in your email address`
    this.inTxtEN02 = `Please fill in your email address`
    this.inTxtCN01 = `请检查您的邮箱地址。`
    this.inTxtCN02 = `请输入您的邮箱地址。`
    this.flagTarget = document.body
    this.flagEN = this.flagTarget.classList.contains('en')
    this.flagCN = this.flagTarget.classList.contains('cn')
  }

  coreFunc(event: any) {
    const val = this.target!.value
    if (!val.match(this.validation)) {
      this.holder!.innerText = this.flagEN
        ? this.inTxtEN01
        : this.flagCN
          ? this.inTxtCN01
          : this.inTxt01
      this.txtfield!.classList.add('is-disabled02')
      event.preventDefault()
    }
    if (val === '') {
      this.holder!.innerText = this.flagEN
        ? this.inTxtEN02
        : this.flagCN
          ? this.inTxtCN02
          : this.inTxt02
      this.txtfield!.classList.add('is-disabled02')
      event.preventDefault()
    }
    this.button!.addEventListener('click', this.coreFunc, false)
  }
}
