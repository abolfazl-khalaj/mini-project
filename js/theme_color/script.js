let btnColors = document.querySelectorAll('.themes button')
let themeColor = document.querySelector(':root')
btnColors.forEach(btn=>{
    btn.addEventListener('click',ev=>{
        let color = ev.target.dataset.color
        themeColor.style.setProperty('--theme-color' , color)
    })
})