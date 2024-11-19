let body = document.querySelector('body')

let box = document.getElementById('modal')
let x = document.getElementById('x')
let btn = document.getElementById('btn')
function block(){
    box.style.display = 'block'
        
    }



function cluse(){
    box.style.display = 'none'
}


function exc(event){
    if (event.keycode = 27){
        box.style.display = 'none'
    }}

btn.addEventListener('click' , block) 



x.addEventListener('click' , cluse)



body.addEventListener('keydown' , exc)