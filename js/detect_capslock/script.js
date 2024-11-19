let password = document.querySelector('#password')

password.addEventListener('keydown',(e)=>{
    let lengthVal = e.target.value.length
    if(e.getModifierState('CapsLock')){
       // document.querySelector('#warning').setAttribute('style','display:block;')
       document.querySelector('#warning').style.display = 'block'
        password.setAttribute('maxlength',lengthVal)
    }else{
    //    document.querySelector('#warning').setAttribute('style','display:none;')
        document.querySelector('#warning').style.display = 'none'
        password.removeAttribute('maxlength')
    }
})

