
const $ = document
const wrapper = $.querySelector('.wrapper')
const btnAdd = $.querySelector('.add-box')
const popUp = $.querySelector('.popup-box')
const inputTitle = $.querySelector('#inputTitle')
const description = $.querySelector('#description-box')
const btnAddDescription = $.querySelector('#btnAddDescription')
const titlePup = $.querySelector('header p ')
const settings = $.querySelectorAll('.uil-ellipsis-h')


let arrays = []
let isLogin = false
let isUpdate = null
let elemID = 0

btnAdd.addEventListener('click', ()=>{
  showModal()
})

function showModal(titleElem,desElem ){
  
    if(isLogin){
      titlePup.innerHTML = 'Update Node'
      btnAddDescription.innerHTML = 'Update Node'
      inputTitle.value = titleElem
      description.value = desElem
    }else{
      titlePup.innerHTML = 'Add Node'
      btnAddDescription.innerHTML = 'Add Node'
    }
    popUp.classList.add('show')
  
  
}

btnAddDescription.addEventListener('click',()=>{
  isUpdate = false
  selectNode()
})

$.querySelector('.uil-times').addEventListener('click',removeModal) 


function selectNode(){
  if(isUpdate){

      let newArray = getNodeLocalStorage()
      console.log(elemID,newArray);
      newArray.forEach(array=>{
      console.log(array.id === elemID);
    })

  }else{

    if(inputTitle.value && description.value){
      let arr = {
          id: arrays.length + 1 ,
          title : inputTitle.value ,
          description: description.value,
          date:nowDate()
        }
        arrays.push(arr)
        setNodeLocalStorage(arrays)
        addNodeDom(arrays)
        removeModal()
      }else{
        alert('input not type')
      }

  }

}



function removeModal(){
  popUp.classList.remove('show')
  inputTitle.value = ''
  description.value = ''
}


function addNodeDom(arr){

  $.querySelectorAll('.note').forEach(n=> n.remove())

  arr.forEach(item => {
    wrapper.insertAdjacentHTML('beforeend', `
    <li class="note">
        <div class="details">
          <p>${item.title}</p>
          <span>${item.description}</span>
        </div>
        <div class="bottom-content">
          <span>${item.date}</span>
          <div class="settings">
            <i class="uil uil-ellipsis-h" onclick='showSettings(this)'></i>
            <ul class="menu">
              <li onclick="updateNodeNew('${item.id}','${item.title}','${item.description}')">
                <i class="uil uil-pen"></i>Edit
              </li>
              <li onclick='deleteNode(${item.id})'>
                <i class="uil uil-trash"></i>Delete
              </li>
            </ul>
          </div>
        </div>
      </li>
    `)
  });
}

function nowDate(){
  const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
  const now = new Date()
  let nowDay = now.getDay()
  let nowMonth = now.getMonth()
  let nowYear = now.getFullYear()
  return `${nowDay},${months[nowMonth]},${nowYear}`

}

function setNodeLocalStorage(arr){
  localStorage.setItem('nodes',JSON.stringify(arr))
}


function getNodeLocalStorage(){
  let local = localStorage.getItem('nodes')
  if(local){
    arrays = JSON.parse(local)
  }else{
    arrays =[]
  }
  return arrays
}

window.addEventListener('load', ()=>{
  let i  = getNodeLocalStorage()
  addNodeDom(i)

})


function showSettings(el){
  el.parentElement.classList.add('show')

  document.addEventListener('click',e=>{

    if(e.target.tagName !== 'LI'&& e.target.tagName !== 'I'){
      el.parentElement.classList.remove('show')
    }
  })
}

function deleteNode(IdElem){
  arrays = arrays.filter(arr=>arr.id !== IdElem)
  addNodeDom(arrays)
  setNodeLocalStorage(arrays)
}

function updateNodeNew(IdElem,titleElem,desElem ){
  isLogin = true
  isUpdate = true
  elemID = IdElem

  showModal(titleElem,desElem )
  console.log(elemID);

}



