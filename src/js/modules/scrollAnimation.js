let options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.2
}

let observer = new IntersectionObserver(callback, options)

let callback = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animation')
      }
   })
}

let animateList = document.querySelectorAll('.animate')
animateList?.forEach(i => {
   observer.observe(i)
})