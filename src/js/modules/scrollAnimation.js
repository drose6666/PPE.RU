window.addEventListener('load', () => {
   let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
   }

   let callback = (entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animation')
         }
      })
   }

   let observer = new IntersectionObserver(callback, options)

   let animateList = document.querySelectorAll('.animate')
   animateList?.forEach(i => {
      observer.observe(i)
   })
})