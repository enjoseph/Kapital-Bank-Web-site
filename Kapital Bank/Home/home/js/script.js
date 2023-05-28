
//! ------------>  Search  Section
let searchIcon = document.querySelector('.search-icon').children[0]
let searchSection = document.querySelector('.search')
let headerNav = document.querySelector('.header-nav')
let searchNav = document.querySelector('.search-nav')
let xmarkIcon = document.querySelector('.fa-circle-xmark')
// console.log()

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



// !-----------------------> Main Bannner 

// Zoom İn Animation 
let bannerMain = document.querySelector('.slide')
let bannerContainer = document.querySelector('.slide-container')
// console.log(bannerMain)
// console.log(bannerContainer)
// RUN EVENT
bannerMain.addEventListener('mouseenter', function () {
    zoomİnBanner_IMG()
    // console.log('isledi')


})
// ENN EVENT


function zoomİnBanner_IMG() {
    let owlStage = document.getElementsByClassName('owl-stage')[0].children
    for (let i = 0; i < owlStage.length; i++) {
        let bannerMain_IMG = bannerContainer.children[0].children[0].children[0].children[i].children[0].children[1].children[0]
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
    let owlStage = document.getElementsByClassName('owl-stage')[0].children
    for (let i = 0; i < owlStage.length; i++) {
        let bannerMain_IMG = bannerContainer.children[0].children[0].children[0].children[i].children[0].children[1].children[0]
        bannerMain_IMG.removeAttribute('style')
        
    }

}




// !------------------------> Debit Card section
let dcRightBTN = document.getElementsByClassName('DCright')[0]
let dcLeftBTN = document.getElementsByClassName('DCleft')[0]

let creditCard = document.getElementsByClassName('credit-card')
// console.log(dcRightBTN)


let j = 0
dcRightBTN.addEventListener('click', function () {

    for (i = 0; i < creditCard.length; i++) {
        creditCard[i].classList.remove('viwe-opacity')
    }
    if (creditCard.length - 1 === j) {
        j = 0
        // console.log('isledi')
    } else {
        j++
    }
    changeCard(j)
    // console.log(j)

})



dcLeftBTN.addEventListener('click', function () {
    for (i = 0; i < creditCard.length; i++) {
        creditCard[i].classList.remove('viwe-opacity')
    }
    // console.log(j+'event baslangic')

    if (j == 0) {
        j = creditCard.length - 1
        // console.log('isledi')
        // console.log(creditCard.length)

    } else {
        j = (j - 1)
    }
    changeLeftCard(j)
    // console.log(j)
})




function changeLeftCard(f) {
    creditCard[f].classList.add('viwe-opacity')
}

function changeCard(f) {
    creditCard[f].classList.add('viwe-opacity')

}


// !----------------------->  Credit Calculator 
let creditBTN = document.getElementsByClassName('creditBTN')[0]
let birbankBTN = document.getElementsByClassName('birbankBTN')[0]
let depositBTN = document.getElementsByClassName('depositBTN')[0]
let creditSection = document.querySelector('.credit')
let birbankSection = document.querySelector('.birbank')
let depositSection = document.querySelector('.deposit')
let cardsSection = document.getElementsByClassName('credit-calculator')[0].children
let BTNS = document.getElementsByClassName('credit-calculator-header')[0].children
// console.log()
// RUN Event
creditBTN.addEventListener('click', function (e) {
    reomve_cardsSection()
    changeSection(creditSection)
    selectTAG(e)
})
// END Event





// RUN Event Birbank
birbankBTN.addEventListener('click', function (e) {
    reomve_cardsSection()
    changeSection(birbankSection)
    selectTAG(e)

})
// END Event



// RUN Event Deposit
depositBTN.addEventListener('click', function (e) {
    reomve_cardsSection()
    changeSection(depositSection)
    selectTAG(e)

})
// END Event



// Function 
function changeSection(section) {

    section.style.display = 'flex'


}


function reomve_cardsSection() {
    for (i = 1; i < cardsSection.length; i++) {
        cardsSection[i].style.display = 'none'
    }

}

function selectTAG(event) {
    for (i = 1; i < BTNS.length; i++) {
        BTNS[i].classList.remove('selectTAG')
    }
    event.target.classList.add('selectTAG')
}





// Calculator 

let amountrangeInput = document.getElementById('amountrange')
let precentRangeInput = document.getElementById('precentRange')
let durationRangeInput = document.getElementById('durationRange')
let inputText = document.getElementsByClassName('input-text')
let calcResult = document.getElementsByClassName('calculator-right-container')[0].children[1].children[0]
let amountrangeBirbank = document.getElementById('amountrangeBirbank')
let durationRangeBirbank = document.getElementById('durationRangeBirbank')
let calcResultBirbank = document.getElementsByClassName('calculator-right-container')[1].children[1].children[0]
let precentRangeDeposit = document.getElementById('precentRangeDeposit')
let calcResultDeposit = document.getElementsByClassName('red')
// console.log()




// RUN Event
amountrangeInput.addEventListener('input', function () {
    inputText[0].children[1].innerHTML = amountrangeInput.value
    calcResult_calc()

})
//END Event


// RUN Event
precentRangeInput.addEventListener('input', function () {
    inputText[1].children[1].innerHTML = precentRangeInput.value
    calcResult_calc()

})
//END Event

// RUN Event
durationRangeInput.addEventListener('input', function () {
    inputText[2].children[1].innerHTML = durationRangeInput.value
    calcResult_calc()

})
//END Event


// RUN Event BIRBANK
durationRangeBirbank.addEventListener('input', function () {
    inputText[4].children[1].innerHTML = durationRangeBirbank.value
    calcResultBirbank_calc()

})
//END Event

// RUN Event
amountrangeBirbank.addEventListener('input', function () {
    inputText[3].children[1].innerHTML = amountrangeBirbank.value
    calcResultBirbank_calc()

})
//END Event


// RUN Event
precentRangeDeposit.addEventListener('input', function () {
    inputText[6].children[1].innerHTML = precentRangeDeposit.value
    calcResultDeposit_calc()

})
//END Event





// Calculator Result

function calcResult_calc() {
    let result = (((amountrangeInput.value * precentRangeInput.value) / 100) + amountrangeInput.value / durationRangeInput.value)
    calcResult.innerHTML = Math.round(result * 100) / 100
}


function calcResultBirbank_calc() {
    let result = (((amountrangeBirbank.value * 6.2) / 100) + amountrangeBirbank.value / durationRangeBirbank.value)
    calcResultBirbank.innerHTML = Math.round(result)

}


function calcResultDeposit_calc() {
    if (precentRangeDeposit.value == 12) {
        calcResultDeposit[0].children[0].innerHTML = 6
        calcResultDeposit[1].children[0].innerHTML = 270
        calcResultDeposit[2].children[0].innerHTML = 22.5

    } else if (precentRangeDeposit.value == 18) {
        calcResultDeposit[0].children[0].innerHTML = 6.5
        calcResultDeposit[1].children[0].innerHTML = 438.75
        calcResultDeposit[2].children[0].innerHTML = 24.38
    } else if (precentRangeDeposit.value == 24) {
        calcResultDeposit[0].children[0].innerHTML = 7
        calcResultDeposit[1].children[0].innerHTML = 630
        calcResultDeposit[2].children[0].innerHTML = 26.25
    } else if (precentRangeDeposit.value == 36) {
        calcResultDeposit[0].children[0].innerHTML = 7.5
        calcResultDeposit[1].children[0].innerHTML = 1012.5
        calcResultDeposit[2].children[0].innerHTML = 28.13
    }
}







// // !----------------- News Section 
// let newsBTN = document.getElementsByClassName('news-main')[0].children[2]
// // console.log(newsBTN)

// //RUN Event 
// newsBTN.addEventListener('click', function () {

//     newsBTN.parentElement.children[0].classList.toggle('display-none')
//     newsBTN.parentElement.children[1].classList.toggle('display-none')



// })




// !--------------------------->  Valyuta calculator
let slideDiv = document.querySelector('.valyuta-right-content').children[1].children[1].children[1]
let valyutaInput = document.getElementById('valyutaInput')
let valyutaConvert = document.getElementsByClassName('valyuta-convert')[0]
let tbodyTAG = valyutaConvert.children[0].children
let BUY$SELL = document.querySelector('.buy-sell')




// RUN Event 
BUY$SELL.children[1].addEventListener('click', function (e) {
    for (i = 0; i < BUY$SELL.children.length; i++) {
        BUY$SELL.children[i].classList.remove('selectTAG')
        // console.log('isledi')
    }
    e.target.classList.add('selectTAG')

    // console.log('isledi')
    slideDiv.children[0].addEventListener('click', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.7020) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.9256) * 100) / 100
        tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'
        slideDiv.parentElement.children[0].children[0].innerHTML = 'USD'
        slideDiv.children[0].innerHTML = 'AZN'


        valyutaInput.addEventListener('input', function () {

            tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.69) * 100) / 100
            tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.91) * 100) / 100
            tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'


        })
        // console.log('isledi')
    })


    valyutaInput.addEventListener('input', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.5893) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value / 0.5438) * 100) / 100

    })
    tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.5893) * 100) / 100
    tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value / 0.5438) * 100) / 100


    slideDiv.children[1].addEventListener('click', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.8843) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.1104) * 100) / 100
        tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'
        tbodyTAG[2].children[0].children[1].innerHTML = 'USD'

        slideDiv.parentElement.children[0].children[0].innerHTML = 'EUR'
        slideDiv.children[1].innerHTML = 'AZN'


        valyutaInput.addEventListener('input', function () {

            tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.83) * 100) / 100
            tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.84) * 100) / 100
            tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'


        })
    })
})


BUY$SELL.children[0].addEventListener('click', function (e) {
    for (i = 0; i < BUY$SELL.children.length; i++) {
        BUY$SELL.children[i].classList.remove('selectTAG')
        // console.log('isledi')
    }
    e.target.classList.add('selectTAG')

    // console.log('isledi')
    slideDiv.children[0].addEventListener('click', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.69) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.91) * 100) / 100
        tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'
        slideDiv.parentElement.children[0].children[0].innerHTML = 'USD'
        slideDiv.children[0].innerHTML = 'AZN'


        valyutaInput.addEventListener('input', function () {

            tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.69) * 100) / 100
            tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.91) * 100) / 100
            tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'


        })
        // console.log('isledi')
    })


    valyutaInput.addEventListener('input', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.69) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value / 1.86) * 100) / 100

    })
    tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.5875) * 100) / 100
    tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.5307) * 100) / 100

    slideDiv.children[1].addEventListener('click', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.83) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.84) * 100) / 100
        tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'
        tbodyTAG[2].children[0].children[1].innerHTML = 'USD'

        slideDiv.parentElement.children[0].children[0].innerHTML = 'EUR'
        slideDiv.children[1].innerHTML = 'AZN'


        valyutaInput.addEventListener('input', function () {

            tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.83) * 100) / 100
            tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.84) * 100) / 100
            tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'


        })
        // console.log('isledi')
    })
})


slideDiv.children[0].addEventListener('click', function () {

    tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.69) * 100) / 100
    tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.91) * 100) / 100
    tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'
    slideDiv.parentElement.children[0].children[0].innerHTML = 'USD'
    slideDiv.children[0].innerHTML = 'AZN'


    valyutaInput.addEventListener('input', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.69) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.91) * 100) / 100
        tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'


    })
    // console.log('isledi')
})


valyutaInput.addEventListener('input', function () {

    tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value / 1.69) * 100) / 100
    tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value / 1.86) * 100) / 100

})


slideDiv.children[1].addEventListener('click', function () {

    tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.83) * 100) / 100
    tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.84) * 100) / 100
    tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'
    tbodyTAG[2].children[0].children[1].innerHTML = 'USD'

    slideDiv.parentElement.children[0].children[0].innerHTML = 'EUR'
    slideDiv.children[1].innerHTML = 'AZN'


    valyutaInput.addEventListener('input', function () {

        tbodyTAG[1].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 1.83) * 100) / 100
        tbodyTAG[2].children[0].children[0].innerHTML = Math.round((valyutaInput.value * 0.84) * 100) / 100
        tbodyTAG[1].children[0].children[1].innerHTML = 'AZN'


    })
    // console.log('isledi')
})

//END Event




