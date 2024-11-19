let $ = document
const inputColorA = $.querySelector('#color-a'),
inputColorB = $.querySelector('#color-b'),
btnGenerate = $.querySelector('#submit'),
buttonsDir = $.querySelectorAll('.buttons button'),
textArea = $.querySelector('#code'),
btnCopy = $.querySelector('#copy');




buttonsDir.forEach(btn=>{
    btn.addEventListener('click',e=>{
        buttonsDir.forEach(btn=>btn.classList.remove('active'))
        let elem = e.target
        if(elem.tagName === 'I'){
            elem.parentElement.classList.add('active')

        }else if(elem.tagName === 'BUTTON'){
            elem.classList.add('active')
        }
    })
})




function selectGenerator(){
    let elemDir = $.querySelector('.buttons button.active')
    let direction = elemDir.dataset.dir
    let bgLiner = `background:linear-gradient(${direction}, ${inputColorB.value}, ${inputColorA.value});`
    document.body.setAttribute(`style`,bgLiner)
    textArea.innerHTML = bgLiner
    console.log(bgLiner);
}

function copy (){
    textArea.select()
    document.execCommand('copy')
    alert('copy ')
}

btnGenerate.addEventListener('click',selectGenerator)
btnCopy.addEventListener('click',copy)


selectGenerator()





















