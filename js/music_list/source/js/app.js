let $ = document

let iconMusic = $.querySelectorAll('.fa-play')
let music = $.querySelectorAll('audio')

let  nameDataIcon ;

iconMusic.forEach(function (icon){
    icon.addEventListener('click' , function (){
        icon.dataset.name
    })
})