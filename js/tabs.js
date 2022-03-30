const glazingContent = document.querySelectorAll('.glazing_content')
const glazingContainer = document.querySelector('.glazing_slider')

const decorationContainer = document.querySelector('.decoration_slider')
const decorationsLinks = document.querySelectorAll('[data-class]')
const decorationContent = document.querySelectorAll('.decoration_content-item')

glazingContainer.addEventListener('click', function(e) {
    tabClickHandler(e, glazingContent)
})

decorationContainer.addEventListener('click', function(e) {
    tabClickHandler(e, decorationContent, {link: decorationsLinks, class: 'after_click'})
})

function tabClickHandler(e, contentContainer, className = null) {
    const tabLink = e.target.closest('[data-type]')

    if(tabLink) {
        const selector = tabLink.dataset.type

        for (let item of contentContainer) {
            item.classList.add('hidden')
        }

        if(className) {
            for (let decorationsLink of className.link) {
                decorationsLink.classList.remove(className.class)
            }
                
            tabLink.classList.add(className.class)
        }
    
        document.querySelector(`.${selector}`).classList.remove('hidden')
    }
}