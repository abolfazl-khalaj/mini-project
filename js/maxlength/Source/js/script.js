let inputElem = document.querySelector('input')
let inputMax = inputElem.getAttribute('maxlength')
let lengthElem = document.querySelector('.counter')

inputElem.addEventListener('keydown' , function(){
    lengthElem.innerHTML = inputMax - inputElem.value.length 
})
