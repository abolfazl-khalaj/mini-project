
// ✌ :))
let $ = document
let back = $.querySelector('#Back')
let titleShoe = $.querySelector('h1')
let textShoe = $.querySelector('p')
let imgShoe = $.querySelector('img')

let products = [
    {id : '1' , title : 'best shoes' , price : 100 , img : 'images/1.png'},
    {id : '2' , title : 'sport shoe' , price : 150 , img : 'images/2.png'},
    {id : '3' , title : 'boots' , price : 200 , img : 'images/3.png'},
]

let newUrl = new URLSearchParams(location.search)

let newIdUrl = newUrl.get('id')

let newId =  products.find(function (item){
    return item.id === newIdUrl
})

if (newId){
    titleShoe.innerHTML = newId.title
    imgShoe.setAttribute('src' , newId.img)
}else{
    location.href = '#'
}

console.log(newId);

back.addEventListener('click' , function (){
  history.back()  
})