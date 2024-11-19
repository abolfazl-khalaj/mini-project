let bg = document.querySelector('.container')
let input = document.querySelector('#range')

input.addEventListener('input', function (event) {
    let valueInpu = event.target.value
    bg.style.filter = 'brightness(' + valueInpu + '%)'
})

