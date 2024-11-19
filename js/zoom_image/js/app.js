const container = document.querySelector('.container')
const img = document.querySelector('img')
let i = 2
container.addEventListener('click',()=> i++)
container.addEventListener('dblclick',()=>i--)
container.addEventListener('mousemove',e=>{
    let xPos = e.clientX - e.target.offsetLeft
    let yPos = e.clientY - e.target.offsetTop
    img.style.transformOrigin = `${xPos}px ${yPos}px`
    img.style.transform = `scale(${i})`
})