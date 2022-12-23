let btnRipple = document.querySelectorAll('.button-ripple .btn-hidden-overlay')

for (let item of btnRipple) {
   item.addEventListener('click', function (e) {
      let duration = 500
      const animationElFrames = {
         'opacity': [1, 0],
         'transform': ['translate(-50%, -50%) scale(0)', 'translate(-50%, -50%) scale(4)'],
      }

      let timing = {
         duration: duration,
         iterations: 1,
      }

      let ripple = document.createElement('span')
      ripple.classList.add('ripple')
      ripple.style.top = e.offsetY + 'px'
      ripple.style.left = e.offsetX + 'px'
      ripple.animate(animationElFrames, timing)

      let button = item.parentNode
      button.append(ripple)
      setTimeout(() => {
         ripple.remove()
      }, duration)
   })
}

