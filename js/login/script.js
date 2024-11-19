let $ = document

let userInput = $.querySelector('#userInput')
let passInput = $.querySelector('#passInput')
let lefteye = $.querySelector('#lefteye')
let righteye = $.querySelector('#righteye')
console.log(userInput.value);

function focusInputUser (){
    userInput.addEventListener('input' , function (){
        let lengthValUser = userInput.value.length

        if(lengthValUser > 11){
          return  lefteye.style.left = 114 , righteye.style.left = 176 

        }
        lefteye.style.top = 85
        lefteye.style.left = lengthValUser + 100

        righteye.style.top = 85
        righteye.style.left = lengthValUser + 165
    })
}

function blurInputUser(){
    lefteye.style.top = 75 , 'px'
    lefteye.style.left = 110 , 'px'

    righteye.style.top = 75 
    righteye.style.left = 175


}

function focusInputPass(){
    
    lefteye.style.top = 60
    lefteye.style.left = 120

    righteye.style.top = 60
    righteye.style.left = 165
    

}

userInput.addEventListener('focus' , focusInputUser)
userInput.addEventListener('blur' , blurInputUser)

passInput.addEventListener('input' , focusInputPass)
passInput.addEventListener('blur' , blurInputUser)