const inputElem = document.querySelector('#te-to-search')
const paragraph = document.querySelector('#paragraph')
const btn = document.querySelector('.wrapper button')

btn.addEventListener('click',()=>{
    let text = paragraph.innerHTML
    let val = inputElem.value
   // console.log(inputElem.value.match(paragraph.innerHTML))
   text.replace(val , item => item)
})





