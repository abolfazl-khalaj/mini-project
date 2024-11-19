
let $ = document

let addTodoModal = $.getElementById('add_btn')

let modal = $.getElementById('todo_form')
addTodoModal.addEventListener('click' , function (){
    modal.style.top = '100px'
})


let btnCloseModal = $.querySelector('.btn')
let inputModal = $.getElementById('todo_input')
btnCloseModal.addEventListener('click' , function (){
    modal.style.top = '-50%'
    inputModal.value = ''
    

})
let eventTar 
let addTodoElem = $.getElementById('todo_submit')

function addElem(event){
    let divElem = $.createElement('div')

    divElem.classList.add('todo')
    divElem.draggable = true
    divElem.id = inputModal.value

    let textElem = $.createElement('span')

    if (inputModal.value == false){
        inputModal.value = 'not text'
        divElem.draggable = false
    }
    textElem.innerHTML = inputModal.value

    
    let iconClose = $.createElement('span')
    iconClose.classList.add('close')
    iconClose.innerHTML = '&times;'
    iconClose.addEventListener('click' , function (){
    divElem.remove()
    })

    divElem.append(textElem , iconClose)

    let noStatus = $.getElementById('no_status')
    noStatus.append(divElem)
    inputModal.value = ''
    inputModal.addEventListener('keydown' , function (event){
        if (event.keyCode == 13){
            noStatus.append(divElem)

        }
    })
    

    divElem.addEventListener('dragstart' ,  function (event){
        event.dataTransfer.setData('eventId' , event.target.id)
    })


}

addTodoElem.addEventListener('click' , addElem) 


function ondragHandler(event){
    event.preventDefault()
}

function ondropHandler(event){
    let evenId = event.dataTransfer.getData('eventId')
    let elemEven = $.getElementById(evenId)

    event.target.append(elemEven)
}

