const $ = document
const wrapper = $.querySelector('.wrapper')
const toast = $.querySelector('.toast')
const title = $.querySelector('span')
const subTitle = $.querySelector('p')
const icon = $.querySelector('.icon')
const closeIcon = $.querySelector('.close-icon')

window.addEventListener('load', () => {
    function ajaxRequest() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log('Response:', res.status);
                if (res.status < 300 || res.status === 200) {
                    toast.classList.remove('offline')
                    title.innerHTML = 'You\'re online now'
                    subTitle.innerHTML = 'Hurray! Internet is connected.'
                    icon.innerHTML = '<i class="uil uil-wifi"></i>'

                    closeIcon.addEventListener('click', () => {
                        wrapper.classList.add('hide')
                    })

                    setTimeout(() => {
                        wrapper.classList.add('hide')
                    }, 4000);
                } else {
                    offline()
                }
            })
            .catch(err => {
                console.log('Error:', err);
                offline()
            })
    }

    function offline() {
        wrapper.classList.remove('hide')
        toast.classList.add('offline')
        title.innerHTML = 'You\'re offline now'
        subTitle.innerHTML = 'OoOops! Internet is disConnected.'
        icon.innerHTML = '<i class="uil uil-wifi-slash"></i>'
    }

    setInterval(() => {
        ajaxRequest()
    }, 100)
})