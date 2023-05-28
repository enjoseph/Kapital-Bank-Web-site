// ----------------------------------> Nav More 
let mainNav = document.querySelector('.main-nav')
let li = mainNav.children[0].children
console.log(li)

let navMore = document.querySelector('.nav-more')
let moreDIV = navMore.children
let navigation = document.querySelector('.navigation')
console.log(navigation)

for (let index = 0; index < li.length; index++) {

    li[index].addEventListener('mouseenter', function (e) {
        console.log(e.target.children[0].innerHTML)

        moreDIV[index].removeAttribute('style')

    })



    li[index].addEventListener('mouseleave', function (e) {
        console.log(mainNav.children[0])

        moreDIV[index].style.display = 'none';


    })
    
}

