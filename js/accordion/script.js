const wrappers = document.querySelectorAll('.wrapper')

const toggle = document.querySelectorAll('.toggle')
const content = document.querySelectorAll('.content')
const icon = document.querySelectorAll('.icon')


function closeTodo (){

    for(let i = 0 ; i < content.length ; i++){
    toggle[i].style.color = '#111130'
    content[i].style.height = '0'
    icon[i].classList.add('fa-plus')
    icon[i].classList.remove('fa-minus')

   }

}
  


wrappers.forEach(wrapper=>{

    wrapper.addEventListener('dblclick',closeTodo)
    wrapper.addEventListener('click',e=>{
        
        closeTodo()

        let toggleElem = wrapper.querySelector('.toggle')
        let contentElem = wrapper.querySelector('.content')
        let iconElem = wrapper.querySelector('.icon')

        toggleElem.style.color = 'blue';
        contentElem.style.height = contentElem.scrollHeight +'px'
        iconElem.classList.add('fa-minus')
        iconElem.classList.remove('fa-plus')


    })
})



