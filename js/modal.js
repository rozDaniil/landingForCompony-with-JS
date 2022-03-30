const engineerBtn = document.querySelector('.popup_engineer_btn')
const contactBtn = document.querySelectorAll('.phone_link')
const modalContactWindowEngineer = document.querySelector('.popup_engineer')
const modalContactWindow = document.querySelector('.popup')
let modal

const modalActivationContainer = [engineerBtn, ...contactBtn]

modalActivationContainer.forEach(el => {
    el.addEventListener('click', function(e) {

        e.preventDefault()

        if (el === engineerBtn) {
            modal = modalContactWindowEngineer
        } else {
            modal = modalContactWindow
        }

        modal.classList.add('visible')
        modalClickHandler(modal)
    })
});

setTimeout(() => {
    modalContactWindow.classList.add('visible')
    modalClickHandler(modalContactWindow)
}, 60000000);

function modalClickHandler(element) {
    element.addEventListener('click', function(e) {
        const closeBtn = e.target.closest('.popup_close')
        const content = e.target.closest('.popup_content ')

        if (closeBtn) {
            this.classList.remove('visible')
        }

        if (!content) {
            this.classList.remove('visible')
        }
    })
}