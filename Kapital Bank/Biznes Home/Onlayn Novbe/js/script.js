
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

let navigation = document.querySelector('.main-nav').children[0]
let navigationItem = navigation.children
let navMore = document.querySelector('.nav-more')
let navMoreCard = document.querySelector('.nav-more').children



// RUN EVENT


// Card  Open Action
navigationItem[0].addEventListener('mouseenter', function () {
    openNavMore()
})

navMore.addEventListener('mouseenter', function () {
    openNavMore()
})



function openNavMore() {
    navMoreCard[0].classList.add('viwe-display')


}



// Card  Close Action
navigationItem[0].addEventListener('mouseleave', function () {

    closeNavMore()
})

navMore.addEventListener('mouseleave', function () {

    closeNavMore()
})


function closeNavMore() {
    navMoreCard[0].classList.remove('viwe-display')

}

// ---------------- END  EVENT





// !----------------- Main Banner 

// Zoom İn Animation 
let bannerMain = document.querySelector('.banner-main')
let bannerContainer = document.querySelector('.banner-container')

// RUN EVENT
bannerMain.addEventListener('mouseenter', function () {
    zoomİnBanner_IMG()

})
// ENN EVENT


function zoomİnBanner_IMG() {

    for (let i = 0; i < bannerContainer.children.length; i++) {
        let bannerMain_IMG = bannerContainer.children[i].children[1].children[0]
        bannerMain_IMG.style.padding = "0";
        bannerMain_IMG.style.top = "0";
    }


}




// Zoom Out Animation 
// RUN EVENT
bannerMain.addEventListener('mouseleave', function () {
    zoomOutBanner()

})
// ENN EVENT



function zoomOutBanner() {
    for (let i = 0; i < bannerContainer.children.length; i++) {
        let bannerMain_IMG = bannerContainer.children[i].children[1].children[0]
        bannerMain_IMG.removeAttribute('style')
    }

}








//! --------------------> Visa Card  

let leftBTN_Visa = document.getElementsByClassName('leftBTN-Visa')[0]
let rightBTN_Visa = document.getElementsByClassName('rightBTN-Visa')[0]
let visaContainer = document.getElementsByClassName('visa-container')[0]
let textContainer = visaContainer.children[0].children[1].children//Text Element
let imgContainer = document.querySelector('.img-container').children//Image Element
// console.log(imgContainer[0]) //Check Console 


// RUN EVENT

let index = 0

// RUN Right Button 
rightBTN_Visa.addEventListener('click', function () {

    if (index == (textContainer.length - 1)) {
        index = 0
    } else {
        index = index + 1
    }

    // ViweCardImage
    RemoveVisaCard()
    changeVisaCard(index)
})

// RUN Left Button 
leftBTN_Visa.addEventListener('click', function () {

    if (index == 0) {
        index = textContainer.length - 1
    } else {
        index = (index - 1)

    }

    /* --- ViweCardImage --- */
    //Remove ALL  Class
    RemoveVisaCard()

    //ADD class
    changeVisaCard(index)
})




function changeVisaCard(f) {
    imgContainer[f].classList.add('viwe-opacity')
    textContainer[f].classList.add('viwe-opacity')
}


function RemoveVisaCard() {
    for (i = 0; i < imgContainer.length; i++) {
        imgContainer[i].classList.remove('viwe-opacity')
        textContainer[i].classList.remove('viwe-opacity')
    }
}





// !----------------- News Section 

let news = document.getElementsByClassName('news')
let circle = document.getElementsByClassName('circle')
console.log(circle)



// Date Circle manual Hover Background Effect
// RUN Event 
for (let index = 0; index < circle.length; index++) {
    news[index].addEventListener('mouseenter', function () {

        //Add Style 
        dateBackgroundColor(index)
    })
}
// END Event

function dateBackgroundColor(f) {
    circle[f].children[0].style.backgroundColor = "#f45369";
    console.log('isledi' + circle[index])
}




for (let index = 0; index < circle.length; index++) {
    news[index].addEventListener('mouseleave', function () {

        //Remove All Style
        remove_dateBackgroundColor()
    })
}


function remove_dateBackgroundColor() {
    for (let i = 0; i < circle.length; i++) {
        circle[i].children[0].removeAttribute('style')
    }
}




