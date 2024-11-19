let select = navigator.userAgent.match('Chrome')
window.addEventListener('load', ()=>{
let a = navigator.userAgent.match(/chrome/i) ? 'chrome' :
        navigator.userAgent.match(/edg/i) ? 'edge' :
        navigator.userAgent.match(/firefox/i) ? 'firefox' :
        navigator.userAgent.match(/opr/i) ? 'opera' :
        navigator.userAgent.match(/safari/i) ? 'safari' :
        null
console.log(a);

})


//let  elem = document.querySelector(`.${a}`)
//elem.style.transform = 'scale(1.3)';
//elem.style.opacity = 1;
window.addEventListener('load', () => {
    let userAgent = navigator.userAgent
    let userBrowser = null

    if (userAgent.match(/edg/i)) {
        userBrowser = 'edge'
    } else if (userAgent.match(/firefox/i)) {
        userBrowser = 'firefox'
    } else if (userAgent.match(/opr/i)) {
        userBrowser = 'opera'
    } else if (userAgent.match(/chrome/i)) {
        userBrowser = 'chrome'
    } else if (userAgent.match(/safari/i)) {
        userBrowser = 'safari'
    }

    console.log('Your Browser:', userBrowser);

    let userBrowserImageElem = document.querySelector(`.${userBrowser}`)

    if (userBrowserImageElem) {
        userBrowserImageElem.style.opacity = '1'
    }
})