let mainBox= document.getElementsByClassName('main-box')
let slideDownBox =document.getElementsByClassName('default')
// console.log(mainBox[0].children[1].innerHTML)


for (let index = 0; index < mainBox.length; index++) {
    mainBox[index].addEventListener('click', function (e) {
        slideDownBox[index].classList.toggle('slideDown-box')
        // e.target.children[1].innerHTML='&#8722;'
        console.log('isledi')
    })
    
}
