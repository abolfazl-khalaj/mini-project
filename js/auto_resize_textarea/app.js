let elem = document.querySelector('textarea')
elem.addEventListener('input',e=>{
    elem.style.height = 'auto'
    elem.style.height = `${elem.scrollHeight}px`
})