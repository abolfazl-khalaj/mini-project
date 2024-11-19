const anim = document.querySelector('.anim')
const a = document.querySelectorAll('a')

a.forEach(aElem =>{aElem.onmouseenter = e =>{
    anim.style.left = e.target.offsetLeft + 'px'
    anim.style.width = e.target.offsetWidth + 'px' }})