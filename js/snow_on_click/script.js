document.addEventListener('click',e=>{

    let top = e.clientY;
    let left = e.clientX
    let size = Math.floor(Math.random()*150)

    let elem = document.createElement('span')
    elem.classList.add('snowflake')
    elem.style.cssText = `
    width:${size}px;
    height:${size}px;
    top:${top}px;
    left:${left}px;
    `

    document.body.append(elem)

    setTimeout(() => {
        elem.remove()
    }, 1000);
})
