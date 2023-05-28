
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

