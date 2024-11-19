//https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=
const wrapper = document.querySelector('.wrapper')
const btn = document.querySelector('.form button')
const input = document.querySelector('.form input')
const img = document.querySelector('.qr-code img')

btn.addEventListener('click',()=>{

    let valInput = input.value 
    wrapper.classList.toggle('active')

    input.addEventListener('input',()=>{
    if(input.value === ''){
        wrapper.classList.remove('active')
    }
    })

    let url = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='
    img.setAttribute('src', `${url} ${valInput}`)


})
