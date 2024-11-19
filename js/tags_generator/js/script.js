let $ = document
const ulElem = $.querySelector('#ulElem')
const spanLengthLi = $.querySelector('.details span')
const inputElem = $.querySelector('#inputElem')
const btnRemoveAll =  $.querySelector('.details button')
btnRemoveAll.addEventListener('click',()=>{
    $.querySelectorAll('ul li').forEach(li=>li.remove())
    inputElem.value = ''
    selectLength()
})
inputElem.addEventListener('keypress', e =>{
if(e.key === 'Enter' ){
    if(inputElem.value){
    addElem(inputElem.value)
    inputElem.value = ''
    selectLength()
    }
}
inputElem.focus()
})
let addElem = val =>{    
    ulElem.insertAdjacentHTML('afterbegin',`
    <li onclick="removeTag(this)" >${val}
    <i class="uit uit-multiply onclick="removeTag(this)"></i>
    </li>
    `)
}
function removeTag(i){
    i.remove()
    selectLength() 
    inputElem.focus()

}
let selectLength = ()=>{
    let lengthLi = $.querySelectorAll('li').length
    spanLengthLi.innerHTML = 10 - lengthLi
    if (spanLengthLi.innerHTML == '0'){
        inputElem.setAttribute('style','display:none;')
    }else{
        inputElem.setAttribute('style','display:block;')
    }
    inputElem.focus()

}
// 
// `<li>${tag} <i class="uit uit-multiply onclick="removeTag(this)"></i></li>`