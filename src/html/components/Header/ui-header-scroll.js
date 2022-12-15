/**
 * TODO: Header scroll animation
 */
let currentScrollPos = 0
window.addEventListener('scroll', () => {
   headerScroll()
})

headerScroll()

function headerScroll() {
   let windowScroll = window.pageYOffset
   let header = document.querySelector('header.scroll')

   // * Появление header.scroll только при скролле вниз
   if (windowScroll >= header.clientHeight + 100) {
      header.classList.add('active')
      if (windowScroll > currentScrollPos)
         header.classList.remove('active')
      else header.classList.add('active')
   } else {
      header.classList.remove('active')
   }

   currentScrollPos = windowScroll
};