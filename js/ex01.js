'use strict'


init()
function init() {
    var elBtn = document.querySelector('button')
    elBtn.onclick = () => {
        elBtn.style.display = 'none'

        setTimeout(() => {
            elBtn.style.display = 'block'
        }, 2000)
    }
}