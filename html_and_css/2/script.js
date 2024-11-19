





let $ = document
const descriptionText = $.querySelector('.content_description-text'),
boxShodowElem = $.querySelector('.content_shodow'),
btnElem = $.querySelector(".content_btn")



btnElem.addEventListener('click',()=>{
    console.log('click');
    descriptionText.classList.toggle('active')
    boxShodowElem.classList.toggle('active')
})
























