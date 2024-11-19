
let $ = document
let inputElem = $.querySelector('#itemInput')
let btnAdd = $.querySelector('#addButton')
let clearLocal = $.querySelector('#clearButton')
let todoList = $.querySelector('#todoList')

let arrTodos = []

function ADDTODO(){
    let valInput = inputElem.value 


    inputElem.value = ''


    let newArr = {
        id : arrTodos.length + 1 ,
        title : valInput ,
        complete : false
    }


    arrTodos.push(newArr)
    setItemLocalStorage(arrTodos)
    addTodoElemHtml(arrTodos)

    


}


function setItemLocalStorage(setitem){
    localStorage.setItem('todo' , JSON.stringify(setitem))
}


function addTodoElemHtml(arrtodos){
    todoList.innerHTML = ''
    arrtodos.forEach(function (todo){

        todoList.insertAdjacentHTML('afterbegin' , 
        `<li class="completed well" >
            <label>${todo.title}</label>
            <button id="btn" class="btn btn-success" onclick="clickBtnComplete(${todo.id})">Complete</button>
            <button class="btn btn-danger" onclick="clickBtnDelet(${todo.id})">Delete</button>
        </li>`)
        let liElem = $.querySelector('li')
        let btnComplete = $.querySelector('#btn')

        if(todo.complete){
            liElem.className = 'uncompleted well'
            btnComplete.innerHTML = 'UnComplete'
        }

    });
}


function clickBtnComplete(id){
    let getItme = JSON.parse(localStorage.getItem('todo'))
    arrTodos = getItme
    arrTodos.forEach(function (todo){
        if(todo.id === id){
            todo.complete = !todo.complete
        }
    })
  
    setItemLocalStorage(arrTodos)
    addTodoElemHtml(arrTodos)
}


function clickBtnDelet(idTodo){
    let getItme = JSON.parse(localStorage.getItem('todo'))
    arrTodos = getItme
    let index = arrTodos.findIndex(function (item){
        return idTodo === item.id
    })
    arrTodos.splice(index , 1)
    setItemLocalStorage(arrTodos)
    addTodoElemHtml(arrTodos)
}


function getItemLocalStorage(){
    let getItme = JSON.parse(localStorage.getItem('todo'))
    if(getItme){
        arrTodos = getItme
    }else{
        arrTodos = []
    }
    addTodoElemHtml(arrTodos)

}


function clearLocalTodo(){
    inputElem.value = ''
    arrTodos = []
    todoList.innerHTML = ''
    setItemLocalStorage(arrTodos)

}

function eventShift(event){

    if (event.keyCode === 16 ){
        ADDTODO()
    }
}

inputElem.addEventListener('keydown' , eventShift)
clearLocal.addEventListener('click' , clearLocalTodo)
window.addEventListener('load' , getItemLocalStorage)
btnAdd.addEventListener('click' , function (){
    if(inputElem.value === ''){
        alert('لطفا اینپوت را پر کنید ..')
    }else{
        ADDTODO()
    }
})


