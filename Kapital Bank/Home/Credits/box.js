let mainBox= document.getElementsByClassName('main-box')
let slideDownBox =document.getElementsByClassName('slideDown-box')
// console.log(mainBox[0].children[1].innerHTML)


for (let index = 0; index < mainBox.length; index++) {
    mainBox[index].addEventListener('click', function (e) {
        slideDownBox[index].classList.toggle('slideDown-Maxcontent')
        // e.target.children[1].innerHTML='&#8722;'
    })
    
}
