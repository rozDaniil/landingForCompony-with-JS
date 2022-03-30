const worksContainer = document.querySelector('.works')
const modalDiv = document.createElement('div')
const modalImg = document.createElement('img')

worksContainer.addEventListener('click', function(e) {
    e.preventDefault()
    
    const imgDiv = e.target.closest('[data-gallery]')
    const imgLink = e.target.closest('a')

    if(imgLink) {
        modalDiv.classList.add('works_modal')
        modalImg.src = imgLink.href
        imgDiv.append(modalDiv)
        modalDiv.append(modalImg)
    }
    
    if(!imgLink) {
        modalDiv.remove()
    }
})