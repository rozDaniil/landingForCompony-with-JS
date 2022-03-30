const calcBegin = document.querySelector('.popup_calc')
const calcMiddle = document.querySelector('.popup_calc_profile')
const calcFinish = document.querySelector('.popup_calc_end')
const bigImg = document.querySelector('.big_img ')
const smallImg = document.querySelectorAll('.small-img')
const body = document.querySelector('body')
let currentModal
let check

body.addEventListener('click', function(e) {
    const calculateBtn = e.target.closest('.glazing_price_btn')
    const toTheProfileCalculation = e.target.closest('.popup_calc_button')
    const toTheSubmitCalculation = e.target.closest('.popup_calc_profile_button')
    const closeBtn = e.target.closest('[data-close]')

    if (calculateBtn) {
        calcBegin.classList.add('visible')
        currentModal = calcBegin
    }

    if (toTheProfileCalculation) {
        toggleClass(calcBegin, calcMiddle)
    }

    if (toTheSubmitCalculation) {
        toggleClass(calcMiddle, calcFinish)
    }

    if (closeBtn) {
        currentModal.classList.remove('visible')
    }
})

calcBegin.addEventListener('click', function(e) {
    const img = e.target.closest('img')

    if (img) {
        const currentBigImg = bigImg.querySelector(`img[alt="${img.alt}"]`)

        for (let img of bigImg.children) {
            img.classList.add('hidden')
        }

        for (let img of smallImg) {
            img.classList.remove('do_image_more')
        }

        currentBigImg.classList.remove('hidden')
        img.classList.add('do_image_more')
    }

})

calcBegin.addEventListener('input', function(e) {
    const input = e.target.closest('input')

    if (input) {
        if (!/^\d+$/.test(input.value)) {
            input.value = ''
        }
    }
})

function toggleClass(elem1, elem2 = null) {
    elem1.classList.remove('visible')
    elem2.classList.add('visible')

    return currentModal = elem2
}