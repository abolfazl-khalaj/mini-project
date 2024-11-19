let $ = document
let title = $.getElementById('title')
let author = $.getElementById('author')
let year = $.getElementById('year')
let tbody = $.getElementById('book-list')
let addtodo = $.getElementById('addtodo')




    
function addBok (){

    tbody.insertAdjacentHTML('afterbegin' , ' <tr> <th>' +  title.value +  '</th>' +  '<th>' +  author.value  + '</th>' + '<th>' + year.value + '</th>' + '</tr>')

}
addtodo.addEventListener('click' , function (){
    
if ( title.value == '' && author.value == '' &&  year.value == ''){
    alert('sdsfs')
    addtodo.removeEventListener('click' , addBok , false)
}



    title.value = ''
    author.value = ''
    year.value = ''



})



addtodo.addEventListener('click' , function (){
})

