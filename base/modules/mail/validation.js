'use strict'

// Mail Validation.
const mailValidation = () => {
  const button = document.querySelector('.fn-submit')
  const holder = document.querySelector('.fn-form-label')
  const txtfield = document.querySelector('.fn-txtfield')
  const target = document.querySelector('.fn-mail-val')
  const validation = /^[A-Za-z0-9]+[\w\.-]+@[\w\.-]+\.\w{2,}$/
  const inTxt01 = `メールアドレスを確認してください。`
  const inTxt02 = `メールアドレスを入力してください。`
  const inTxtEN01 = `Please comfirm in your email address`
  const inTxtEN02 = `Please fill in your email address`
  const inTxtCN01 = `请检查您的邮箱地址。`
  const inTxtCN02 = `请输入您的邮箱地址。`
  const flagTarget = document.body
  const flagEN = flagTarget.classList.contains('en')
  const flagCN = flagTarget.classList.contains('cn')
  const coreFunc = event => {
    const val = target.value
    if(!val.match(validation)) {
      holder.innerText = flagEN ? inTxtEN01 : flagCN ? inTxtCN01 : inTxt01
      txtfield.classList.add('is-disabled02')
      event.preventDefault()
    }
    if(val === '') {
      holder.innerText = flagEN ? inTxtEN02 : flagCN ? inTxtCN02 : inTxt02
      txtfield.classList.add('is-disabled02')
      event.preventDefault()
    }
  }
  button.addEventListener('click', coreFunc, false)
}

export default mailValidation
