const codes = document.querySelectorAll('.code')


codes[0].focus()
let interval;
codes.forEach((code,idx) => {
    code.addEventListener('focus', () =>{
        code.value = ''
       
        codes.forEach(c=>{
            c.classList.remove('animateblink')
        })
        codes[idx].classList.add('animateblink')

        clearInterval(interval)
        if (codes[idx].classList.contains('animateblink')){
            setTimeout(()=>{
                code.placeholder = '_'
            },500)
            setTimeout(()=>{
                code.placeholder = ''
            },1000)
            interval = setInterval(()=> {
                setTimeout(()=>{
                    code.placeholder = '_'
                },500)
                setTimeout(()=>{
                    code.placeholder = ''
                },1000)   
            },1000)
        }
   
    })
    code.addEventListener('blur', ()=> {
   

        setTimeout(() => {
            code.placeholder = '0'
        },1000)
         
     
    })
    code.addEventListener('keydown', (e)=>{
       
        if (e.key >= 0 && e.key<= 9){
            setTimeout(() => {
                codes[idx+1].focus()
            },10)
        }
        if (code === codes[codes.length - 1]){
            setTimeout(() => {
                code.blur()
            },10)
        }
 
        if (e.key === 'Backspace'){
            code.value = '';

            setTimeout(() => {
                codes[idx - 1].value = ''
                codes[idx - 1].focus()
            },10)
        }
    })
})