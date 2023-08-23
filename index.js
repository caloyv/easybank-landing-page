
const gray = document.querySelector('.gray')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
let menu = document.querySelector('.mobile-menu-container')

menuBtn.addEventListener('click', () => {
    console.log("working")
    menuBtn.classList.remove('active')
    closeBtn.classList.add('active')
    menu.classList.add('active')
    gray.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    console.log("working2")
    menuBtn.classList.add('active')
    closeBtn.classList.remove('active')
    menu.classList.remove('active')
    gray.classList.add('hidden')
})

gray.addEventListener('click', () => {
    menuBtn.classList.add('active')
    closeBtn.classList.remove('active')
    menu.classList.remove('active')
    gray.classList.add('hidden')
})

    
