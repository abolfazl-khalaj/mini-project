let $ = document ;
let colors = $.querySelectorAll('.color-box')
let btnAdd = $.querySelector('#btn-save')
let inputElem = $.querySelector('#input-field')
let colorSelect ;

colors.forEach(function (color){
    color.addEventListener('click', function(event){
        colorSelect = event.target.style.backgroundColor
        inputElem.style.backgroundColor = colorSelect
    })
})
function ADDELEM (){
    let divElemParent = $.querySelector('#listed')
    let colorDiv = inputElem.style.backgroundColor
    if (inputElem.value){
        divElemParent.insertAdjacentHTML('afterbegin' , '<div class="card shadow-sm rounded" style="background-color:'+ colorDiv+';"><p class="card-text p-3">'+ inputElem.value +'</p> </div>')
        inputElem.value = ''
        inputElem.style.backgroundColor = '#fff'
        let newDiv = $.querySelector('.card')
        newDiv.addEventListener('click' , function (){
            newDiv.remove()
        })
        let btnIcon = $.querySelector('#btn-delete')
        btnIcon.addEventListener('click' , function (){
            inputElem.value = ''
            inputElem.style.backgroundColor = '#fff'
        })
    }else {
        alert('لطفا اینپوت را پر کنید')
    }
}
btnAdd.addEventListener('click' , ADDELEM)
