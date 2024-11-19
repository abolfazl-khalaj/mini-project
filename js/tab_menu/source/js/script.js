const tabButtons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.content')
tabButtons.forEach(btn=>{
    btn.addEventListener('click' , e=>{
        let elem = e.target
        tabButtons.forEach(btn=>btn.classList.remove('active'))
        elem.classList.add('active')
 
        blockDisplayElem(elem.dataset.id)
    })
})
function blockDisplayElem(id){
    contents.forEach(content=>content.classList.remove('active'))
    document.querySelector(`#${id}`).classList.add('active')
}



