/**
 * ! IMPORT 
 */
import $ from "jquery"
import openMobileMenu from "./modules/openMobileMenu.js";
import openPopup from "./modules/openPopup.js";
import { AccordionAndTabs } from "./modules/accordionAndTabs.js";
import './modules/scrollAnimation.js';
import './modules/rippleAnimation.js';
import Swiper from 'swiper/bundle';

// * Preloader
const preloader = document.querySelector('.preloader')
window.onload = () => {
   preloader?.classList.add('hide')
}



// * Добавление декоративной стрелки (decArrow) к элементам .has-children
const addDecArrow = () => {
   let hasChildrenItems = document.querySelectorAll('.has-children')

   hasChildrenItems?.forEach(item => {
      item.insertAdjacentHTML('beforeend', "<code class='decArrow'></code>")
   })
}

addDecArrow()


/**
 * TODO: Mobile menu
 */
window.addEventListener('load', function() {
   const mobileMenu = new openMobileMenu('.mobile-menu', '.ui-close', '.burger-1', '.overlay')
   let input = document.querySelector('.search-form input')
   
   // clearSearchInputValue(input, mobileMenu)
   openSearchForm(input, mobileMenu) 
})

// * Opening a search form
function openSearchForm(input, mobMenu) {
   let searchIconHeader = document.querySelectorAll('header .openSearch')
   
   for (let i = 0; i < searchIconHeader.length; i++) {
      searchIconHeader[i].addEventListener('click', () => {
         mobMenu.open()

         setTimeout(() => {
            input?.focus()
         }, 1000)
      })
   }
}

// * Closing the search form and clear search value
// function clearSearchInputValue(input, mobMenu) {
//    let startSearch = document.querySelector('.search-form .form-item svg')
//    startSearch?.addEventListener('click', () => {
//       mobMenu.close()
//       input.value = ''
//    })
// }


/**
 * TODO: Opening popup video
 */

const popupVideo = new openPopup('.popup[video]', '.btn-play', '.popup[video] .ui-close', '.popup-overlay', true, '#video-consult', `
   <iframe width="560" height="315" src="https://www.youtube.com/embed/PkDgq0mG8mg" title="YouTube video player"
                     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
`)




/**
 * TODO: Accordion (catalog) in mobile menu
 */
new AccordionAndTabs('accordion', '.mobile-catalog > li', '.menu-level-2')


/**
 * TODO: Custom arrows for Swiper
 */
customSliderArrow('.swiper-button-prev', 'prev')
customSliderArrow('.swiper-button-next', 'next')

function customSliderArrow(selector, direction) {
   let btnArrows = document.querySelectorAll(selector)

   for (let i = 0; i < btnArrows.length; i++) {
      if (direction == 'prev')
         btnArrows[i].innerHTML = '<svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M14.2411 27.3119L1 14.156L14.2411 1"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      else btnArrows[i].innerHTML = '<svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M1 27.3119L14.2411 14.156L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg >'
   }
}


/**
 * TODO: Products slider (home accordion)
 */
document.querySelectorAll('.section-catalog .swiper-container').forEach((item, index) => {
   item.querySelector('.swiper-pagination').classList.add('pagID' + index)
})

document.querySelectorAll('.catalog-swiper').forEach((item, index) => {
   item.classList.add('swiperID' + index)

   new Swiper(`.swiperID${index}`, {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: !0,
      spaceBetween: 30,
      pagination: {
         el: `.pagID${index}`,
         type: "bullets",
         clickable: !0,
         dynamicBullets: !0
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      },
      breakpoints: {
         120: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
         },
         600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1
         },
         900: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1
         },
         1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1
         }
      }
   })
})


/**
 * TODO: Features product swiper
 */
window.addEventListener('load', () => {

   new Swiper('#swiper-features', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 0,
      speed: 800,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
   })
})



/**
 * TODO: Product catalog accordion
 */
$('.accordion-collapse').hide()
$('.accordion-head').on('click', function() {
   $('.accordion-head').not($(this)).removeClass('active')
   $('.accordion-head').not($(this)).parent().children('.accordion-visible').slideDown()
   $('.accordion-head').not($(this)).parent().children('.accordion-collapse').slideUp()
   $(this).toggleClass('active')
   $(this).parent().children('.accordion-collapse').slideToggle()
   $(this).parent().children('.accordion-visible').slideToggle()
})

$('.accordion-collapse .btn-hide').on('click', function() {
   $(this).parents('.accordion-item').children('.accordion-head').removeClass('active')
   $(this).parents('.accordion-item').children('.accordion-visible').slideDown()
   $(this).parents('.accordion-item').children('.accordion-collapse').slideUp()
})



/**
 * TODO: Accordion product specifications
 */
$('.specific-list > li > h5').next().hide()
$('.specific-list > li > h5').on('click', function () {
   $(this).toggleClass('active').next().slideToggle()
})

onClickHideArrow('.product-descr .content')

function onClickHideArrow(content) {
   $('.hide-arrow').on('click', function () {
      $(this).parents(content).slideUp()
      $(this).parents(content).prev().removeClass('active')
   })
}




/**
 * TODO: Swiper reviews
 */

const swiperReviews = new Swiper('#swiper-reviews', {
   slidesPerView: 3,
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 40,
   centeredSlides: true,
   speed: 800,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   breakpoints: {
      120: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 30,
      },
      700: {
         slidesPerView: 2,
         spaceBetween: 30,
         slidesPerGroup: 1
      },
      1150: {
         slidesPerView: 3,
         spaceBetween: 40,
         slidesPerGroup: 1
      }
   }
})



/**
 * TODO: Scroll up arrow
 */
let scrollUpArrow = document.querySelector('.scrollUp-arrow')
scrollUpArrow.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
})




/**
 * TODO: The appearance of an arrow and a header when scrolling
 */
window.addEventListener('load', () => {
   fadeInNavOnScroll('.sticky', 200)
   
   window.addEventListener('scroll', () => {
      fadeInNavOnScroll('.sticky', 200)
   })
})

function fadeInNavOnScroll(elements, distance) {
   let items = document.querySelectorAll(elements)
   for (let i = 0; i < items.length; i++) {
      if (window.scrollY >= distance) 
         items[i].classList.add('active')
      
      if (window.scrollY <= 150)
         items[i].classList.remove('active')
   }
}


