let clickerDIV = document.getElementsByClassName('clicker-div')
let slideDIV = document.getElementsByClassName('slide-div')


for (i = 0; i < clickerDIV.length; i++) {
    clickerDIV[i].addEventListener('click', function (e) {

        e.target.parentElement.parentElement.children[1].classList.toggle('height-element')
        e.target.parentElement.children[1].classList.toggle('height-element')


    })
}

