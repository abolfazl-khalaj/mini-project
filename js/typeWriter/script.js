let text = 'ABOLFAZL';
const textElem = document.querySelector('#text')
let i = 0


function x(){

    if(i < text.length){
        console.log(text[i]);
        textElem.innerHTML += text[i]
        i++
    }else if (i == text.length){
        textElem.innerHTML = '';
        i = 0
    }

    setTimeout(()=>{
        x()
    },200)


}

x()


