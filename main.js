const btnAbout = document.querySelector('.menu-about');
const btnSkill = document.querySelector('.menu-skill');
const btnProd = document.querySelector('.menu-prod');

const blockAbout = document.querySelector('.about');
const blockSkill = document.querySelector('.skills');
const blockProd = document.querySelector('.project');


const btnSlide = document.querySelector('.menu-slide');
const btnBoard = document.querySelector('.menu-board');
const btnOther = document.querySelector('.menu-other');

const blockSlide = document.querySelector('.sliders');
const blockBoard = document.querySelector('.board');
const blockOther = document.querySelector('.other');

const board = document.querySelector('#board');
const colors = ['#7cbdc9', '#d0d0b8', '#afbaa3', '#40817a', '#d4dfe5', '#bad5dc', '#e3e8ee', '#a5b4b9']
const SQUARES_NUMBER = 1000;




btnAbout.addEventListener('click', event => {
    blockSkill.classList.remove('active')
    blockProd.classList.remove('active')
    blockAbout.classList.add('active')
    btnAbout.classList.add('active-btn')
    btnSkill.classList.remove('active-btn')
    btnProd.classList.remove('active-btn')

})

btnSkill.addEventListener('click', event => {
    blockProd.classList.remove('active')
    blockAbout.classList.remove('active')
    blockSkill.classList.add('active')
    btnAbout.classList.remove('active-btn')
    btnSkill.classList.add('active-btn')
    btnProd.classList.remove('active-btn')
})

btnProd.addEventListener('click', event => {
    blockAbout.classList.remove('active')
    blockSkill.classList.remove('active')
    blockProd.classList.add('active')
    btnAbout.classList.remove('active-btn')
    btnSkill.classList.remove('active-btn')
    btnProd.classList.add('active-btn')
})



btnSlide.addEventListener('click', event => {
    blockBoard.classList.remove('active')
    blockOther.classList.remove('active')
    blockSlide.classList.add('active')
    btnSlide.classList.add('active-btn')
    btnBoard.classList.remove('active-btn')
    btnOther.classList.remove('active-btn')

})

btnBoard.addEventListener('click', event => {
    blockOther.classList.remove('active')
    blockSlide.classList.remove('active')
    blockBoard.classList.add('active')
    btnSlide.classList.remove('active-btn')
    btnBoard.classList.add('active-btn')
    btnOther.classList.remove('active-btn')
})

btnOther.addEventListener('click', event => {
    blockSlide.classList.remove('active')
    blockBoard.classList.remove('active')
    blockOther.classList.add('active')
    btnSlide.classList.remove('active-btn')
    btnBoard.classList.remove('active-btn')
    btnOther.classList.add('active-btn')
})


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 5px ${color}, 0 0 20px ${color}` 
}

function removeColor(element) {
    element.style.backgroundColor = '#000'
    element.style.boxShadow = `0 0 5px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



function slidePlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active-slide');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active-slide')
        })
    };

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active-slide')
        })
    };
}

slidePlugin();