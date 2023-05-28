
//! ------------>  Search  Section
let searchIcon = document.querySelector('.search-icon').children[0]
let searchSection = document.querySelector('.search')
let headerNav = document.querySelector('.header-nav')
let searchNav = document.querySelector('.search-nav')
let xmarkIcon = document.querySelector('.fa-circle-xmark')
console.log()

// ----------------------> RUN EVENT
searchIcon.addEventListener('click', function () {

    // Open Search 
    openSearch()
    console.log('isledi')
    // Open Search Navigation
    openSearchNav()

})



function openSearch() {

    // Header-Nav Close
    headerNav.classList.add('hide-opacity')

    // Open Search Section
    setTimeout(function () {
        searchSection.classList.add('viwe-element')
    }, 600)
}


function openSearchNav() {

    // Slide Down Search Navigation
    setTimeout(function () {
        searchNav.classList.add('slideDown')
    }, 600);
}


//--------------------- END EVENT





// ----------------------- > RUN EVENT 
xmarkIcon.addEventListener('click', function () {

    // Close Slide Navigation
    closeSearchNav()

    // Close Search Section 
    closeSearch()
})



function closeSearchNav() {

    // Slide Up Search Navigation
    searchNav.classList.remove('slideDown')

}


function closeSearch() {

    // Close Search Section
    headerNav.classList.remove('hide-opacity')

    searchSection.classList.remove('viwe-element')
}

// ---------------------------- END EVENT



// !--------- Navigation More 

// let navigation = document.querySelector('.main-nav').children[0]
// let navigationItem = navigation.children

// let navMore = document.querySelector('.nav-more').children
// console.log(navMore)

// // RUN EVENT

// navigation.addEventListener('mouseenter', function (e) {

//     console.log(e.target)


//     openNavMore()


// })







// function openNavMore() {
//     navMore[0].classList.add('viwe-display')

// }




// navigationItem[0].addEventListener('mouseleave', function () {

//     closeNavMore()
// })


// function closeNavMore() {
//     navMore[0].classList.remove('viwe-display')

// }

// ---------------- END  EVENT


// !-------------------> Kapital Depoziti 
let dateRange = document.getElementById('dateRange')
let calcResult = document.getElementsByClassName('calculator-result')[0]
let rangeInput = document.querySelector('.range-input')

// rangeInput.children[1]


dateRange.addEventListener('input' , function (){
    rangeInput.children[1].innerHTML= dateRange.value
    calcResultDeposit_calc()
})  



function calcResultDeposit_calc() {
    if ( dateRange.value == 12) {
        calcResult.children[0].innerHTML = 6 + "%"
        calcResult.children[2].innerHTML = 270 + "<span>₼</span> "
        calcResult.children[4].innerHTML = 22.5 + "<span>₼</span> "

    } else if ( dateRange.value == 18) {
        calcResult.children[0].innerHTML = 6.5+ "%"
        calcResult.children[2].innerHTML = 438.75 + "<span>₼</span> "
        calcResult.children[4].innerHTML = 24.38 + "<span>₼</span> "
    } else if ( dateRange.value == 24) {
        calcResult.children[0].innerHTML = 7+ "%"
        calcResult.children[2].innerHTML = 630 + "<span>₼</span> "
        calcResult.children[4].innerHTML = 26.25 + "<span>₼</span> "
    } else if ( dateRange.value == 36) {
        calcResult.children[0].innerHTML = 7.5+ "%"
        calcResult.children[2].innerHTML = 1012.5 + "<span>₼</span> "
        calcResult.children[4].innerHTML = 28.13 + "<span>₼</span> "
    }
    console.log('isledi')
}

