//https://api.dictionaryapi.dev/api/v2/entries/en/black

const input = document.querySelector('#inp-word')
const word = document.querySelector('.word h3')
const btnSearch = document.querySelector('#search-btn')
const audio = document.querySelector('#sound')
const iconAudio = document.querySelector('.fa-volume-up')
const lorem = document.querySelector('.word-meaning')
const Expression = document.querySelector('#Expression')
//const i = document.querySelector('')


btnSearch.addEventListener('click', ()=>{
    let val = input.value 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
    .then(res=>res.json())
    .then(res=>{
        let loreM = res[0].meanings[0].definitions[0].definition
        word.innerHTML = res[0].word
        Expression.innerHTML = res[0].phonetic
        lorem.innerHTML = loreM
        audio.setAttribute('src',res[0].phonetics[0].audio)
        iconAudio.addEventListener('click',()=>audio.play())
    })
    .catch(err =>console.log(err))
})














