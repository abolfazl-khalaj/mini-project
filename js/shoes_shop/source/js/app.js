// DOM => Document Object Model
// BOM => Browser Object Model

let products = [
    {id : '1' , title : 'best shoes' , price : 100 , img : 'images/1.png'},
    {id : '2' , title : 'sport shoe' , price : 150 , img : 'images/2.png'},
    {id : '3' , title : 'boots' , price : 200 , img : 'images/3.png'},
]

let productsElem = document.querySelector('.container')

products.forEach(function (itme){
    productsElem.insertAdjacentHTML('afterbegin' , '<div class="product-card"><h1>'+ itme.title +'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+ itme.img +');"></div><div class="product-info"><div class="product-price">$'+itme.price+'</div><a href="product.html?id='+itme.id+'"- class="product-button">See More</a></div></div>')

});