let $ = document
let inputElem = $.querySelector('input')
let boxAutocom = $.querySelector('.autocom-box')
let serchInput = $.querySelector('.search-input')
let iconInInputSerch = $.querySelector('.icon')

let filterSerch = ()=>{
    let valInput = inputElem.value
    
    let suggIng= suggestions.filter(function (sugg){
        console.log(sugg);
        return sugg.toLowerCase().includes(valInput.toLowerCase())
    })
    console.log(suggIng);
    if(inputElem.value){
        serchInput.classList.add('active')
        filteringItem(suggIng)
    }else{
        serchInput.classList.remove('active')
a

    }

}
let filteringItem = filtering =>{
    let filterElem = filtering.map(filter => {
        return `<li> ${filter}</li>`
    });
    if(!filterElem.length){
        boxAutocom.innerHTML = `<li>${inputElem.value}</li>`
    }else{
        boxAutocom.innerHTML = filterElem.join(' ')
    }
    let liInAutocom = $.querySelectorAll('.autocom-box li')
    liInAutocom.forEach(function (liInBox){
        liInBox.addEventListener('click',function (){
            inputElem.value = liInBox.innerHTML
            boxAutocom.innerHTML = ''
            serchInput.classList.remove('active')

        })
    })
} 
iconInInputSerch.addEventListener('click' , function(){
    boxAutocom.innerHTML = ''
    inputElem.value = ''
    serchInput.classList.remove('active')

})


inputElem.addEventListener('keyup' , filterSerch)