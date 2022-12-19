// Слайдер
const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');

const container = document.querySelector('.container-slides');

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1 ) * 100}vh`;

upBtn.addEventListener('click' , () => {
    changesSlides('up');
})

downBtn.addEventListener('click' , () => {
    changesSlides('down');
})

function changesSlides (direction) {
    if (direction === 'up') {
        activeSlideIndex++ 
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0 ;
        }
    } else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1
            }
        }
        const height  =  container.clientHeight;

        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
        
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}


// Якоря

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click' , function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth' ,
            block: 'start' 
        })
    })
}

// бургер

let nav = document.querySelector('#nav');
let navBtn = document.querySelector('#nav-btn');
let navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./images/icons/NAV CLOSE.svg"
    } 
    else {
        navBtnImg.src = "./images/icons/NAV (1).svg"
    }
    
}






