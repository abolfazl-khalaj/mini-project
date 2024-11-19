const navBar = document.querySelector('#navabar')
let scroll;
window.addEventListener('scroll',e=>{
    scroll >= scrollY ? navBar.style.top ='0px' : navBar.style.top = '-80px';
    scroll = scrollY
})