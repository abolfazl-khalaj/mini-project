const surface = document.querySelector('.surface')
const car = document.querySelector('.car')
let imgCar = document.querySelector('.car img')
let isLightOn = true
window.addEventListener('keydown',e =>{
    if(e.code === 'Space'){
        surface.classList.toggle('anim')
        car.classList.toggle('animCar')
       
    }
    if (e.code === 'Space') {
        if (isLightOn) {
            imgCar.setAttribute('src', 'images/Img_05.png')
            isLightOn = false
      
     }else {
            imgCar.setAttribute('src', 'images/Img_06.png')
            isLightOn = true
        }
    }
})