const boxesContainer = document.getElementById('boxes')
const btn = document.querySelector('.btn')

const createBoxes = function(){
    for (let i  =0; i < 4; i++){
        for (let y = 0; y < 4;y++ ){
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-y * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        
        }
    }
}
createBoxes()

btn.addEventListener('click', function(){
    boxesContainer.classList.toggle('big')
})