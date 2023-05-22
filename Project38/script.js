const nav = document.querySelectorAll("nav ul li");
const contentEl = document.querySelectorAll('.phone img')

const removeShow = function(){
  contentEl.forEach(c => {
    c.classList.remove('show')
  })
}
const removeActive = function(){
  nav.forEach(c => {
    c.classList.remove('active')
  })
}

nav.forEach((n,idx) => {
  n.addEventListener('click', () => {
    removeActive()
    removeShow()
  n.classList.add('active')
  contentEl[idx].classList.add('show')
  })
  
})





// nav.forEach((na) => {
//   na.addEventListener("click", (e) => {
//     const target = e.target.closest('li')
   
//     ////getting dataset of clicked
//    const dataId = target.dataset.id
// console.log(target.dataset.id);
//   const content = document.querySelector(`.${dataId}`)
// console.log(content);


// ////removing and adding show and active class
//   contentEl.forEach(img => {
//   img.classList.remove('show')
// })
// nav.forEach(n => {
//   n.classList.remove('active')
// })

// content.classList.add('show')
//  target.classList.add('active')
//   console.log(target);
//   });
// });
