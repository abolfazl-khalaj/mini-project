let btnColor = document.querySelectorAll('.btn')

btnColor.forEach(function (color){
    color.addEventListener('click' , function (event){
      // let colorSelect =  event.target.dataset.color
       document.documentElement.style.setProperty('--theme-color' , event.target.dataset.color )
    })
})

