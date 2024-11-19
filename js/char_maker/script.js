
let colors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711",
 ];


let variable = document.querySelector(':root')
let btnFace = document.querySelector('#face-btn')
let btnColor = document.querySelector('#color-btn')
let btnHorns = document.querySelector('#horns-btn')
let btnTail = document.querySelector('#tail-btn')
let imgFace = document.querySelector('#face')

let [faceCounter, colorCounter, hornsCounter, tailCounter] = Array(4).fill(0)

function fun(contr , length){
    return contr < length - 1  ? contr + 1 : 0
}

btnFace.addEventListener('click',()=>{
    faceCounter = fun(faceCounter , 6)
    imgFace.setAttribute('src' , `face-${faceCounter}.png`)
})


btnColor.addEventListener('click',()=>{
    colorCounter = fun(colorCounter,colors.length)
    variable.style.setProperty('--color-character' , colors[colorCounter])
})

btnHorns.addEventListener('click',()=>{
    hornsCounter = fun(hornsCounter,colors.length)
    variable.style.setProperty('--color-horns' , colors[hornsCounter])
})
let tail = 'tail'
let ret = (type,prop,inherit)=>{
    type = fun(type,inherit.length)
    variable.style.setProperty(`--color-${prop}` , inherit[type])

}
btnTail.addEventListener('click',ret(tailCounter,tail,colors))


