const passwordEl = document.querySelector('#password')
const btnSubmit = document.querySelector("#btn-submit")
const background = document.querySelector('.background')

const clearInput = function(){
    passwordEl.innerText = ''
    passwordEl.value = ''
}
window.addEventListener('load', ()=>{
  clearInput()
})
passwordEl.addEventListener('keyup', ()=>{

    let blurPercent = 20 * .55 + passwordEl.value.length

    if (passwordEl.value.length > 4 && passwordEl.value.length < 10) {
        passwordEl.style.border = `2px solid orangered`
    }
    if (passwordEl.value.length > 10) {
        passwordEl.style.border = `2px solid limegreen`
    }
    if (passwordEl.value.length < 4) {
        passwordEl.style.border = `2px solid red`
    }
    background.style.filter = `blur(${20 - blurPercent}px)`


})