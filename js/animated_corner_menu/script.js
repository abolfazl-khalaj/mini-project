let $ = document
let btnToggle = $.querySelector('#toggle-btn')
let iconBtn = $.querySelector('.fa-plus')
let iconsInToggle = $.querySelectorAll('.menu a')
//let arraysIcon = Array.from(iconsInToggle)
let falseVal = false

let ToggleIcons = ()=> {

    iconBtn.classList.toggle('active')
        if(!falseVal){
        //    arraysIcon[0].parentElement.setAttribute('style' , 'transform:translate(180px , -15px)')
        //    arraysIcon[1].parentElement.setAttribute('style' , 'transform:translate(160px , 75px)')
        //    arraysIcon[2].parentElement.setAttribute('style' , 'transform:translate(120px , 150px)')
        //    arraysIcon[3].parentElement.setAttribute('style' , 'transform:translate(40px , 180px)')

            iconsInToggle[0].style.transform=('translate(180px , -15px)')
            iconsInToggle[1].style.transform=('translate(160px , 75px)')
            iconsInToggle[2].style.transform = ('translate(120px , 150px)')
            iconsInToggle[3].style.transform=('translate(40px , 180px)')

            falseVal = true
        }else{
        //    arraysIcon.forEach(icons=>{
        //        icons.parentElement.setAttribute('style' , 'transform:translate(0px , 0px)')
        //    })
            iconsInToggle.forEach(icon=>icon.style.transform = ('translate(0 , 0'))
            falseVal = false
        }

}

btnToggle.addEventListener('click' , ToggleIcons)