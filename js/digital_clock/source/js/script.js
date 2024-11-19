let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let seconds = document.querySelector('#seconds')

setInterval(() => {
    let time = new Date ()
    seconds.innerHTML = time.getSeconds()
    minute.innerHTML = time.getMinutes()
    hour.innerHTML = time.getHours()
    if (seconds.innerHTML < 10){
        seconds.innerHTML = '0' + time.getSeconds()
    }
    if (minute.innerHTML < 10){
        minute.innerHTML = '0' + time.getMinutes()
    }
    if(hour.innerHTML < 10){
        hour.innerHTML = '0' + time.getHours()
    }
}, "1000");