/**
 * ! IMPORT 
 */
import $ from "jquery"
import openMobileMenu from "./modules/openMobileMenu.js";
import { AccordionAndTabs } from "./modules/accordionAndTabs.js"
import './modules/scrollAnimation.js'

import Swiper from 'swiper/bundle';


// * Мобильное меню
window.addEventListener('load', function() {
   const mobileMenu = new openMobileMenu('.ui-mobileMenu', '.ui-close', '.ui-burger', '.ui-overlay')
})


// * Аккордион (каталог) в мобильном меню
const mobilMenuCatalog = new AccordionAndTabs('accordion', '.mob-catalog > li', '.mob-catalog_1')


// * Кастомные стрелки для swiper
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


// * Слайдер товаров (аккордион на главном экране)
document.querySelectorAll('.swiper-container').forEach((item, index) => {
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



// * Аккордион каталога товаров
$('.accordion-collapse').hide()
$('.accordion-head').on('click', function() {
   $('.accordion-head').not($(this)).removeClass('active')
   $('.accordion-head').not($(this)).parent().children('.accordion-visible').slideDown()
   $('.accordion-head').not($(this)).parent().children('.accordion-collapse').slideUp()
   $(this).toggleClass('active')
   $(this).parent().children('.accordion-collapse').slideToggle()
   $(this).parent().children('.accordion-visible').slideToggle()
})

$('.accordion-collapse .hide-btn svg').on('click', function() {
   $(this).parents('.accordion-item').children('.accordion-head').removeClass('active')
   $(this).parents('.accordion-item').children('.accordion-visible').slideDown()
   $(this).parents('.accordion-item').children('.accordion-collapse').slideUp()
})

