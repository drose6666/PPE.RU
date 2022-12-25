let btnRipple = document.querySelectorAll('.btn-ripple .overlay-ripple')

for (let item of btnRipple) {
   item.addEventListener('click', function (e) {
      let btnWidth = item.getBoundingClientRect().width.toFixed(2)
      let duration = 1300
      let button = item.parentNode
      
      // const animationElFrames = {
      //    'opacity': [1, 0],
      //    'transform': ['translate(-50%, -50%) scale(0)', 'translate(-50%, -50%) scale(4)'],
      // }
      
      // let timing = {
      //    duration: duration,
      //    iterations: 1,
      // }

      let ripple = document.createElement('span')
      
      ripple.style.top = e.offsetY + 'px'
      ripple.style.left = e.offsetX + 'px'
      ripple.style.width = ripple.style.height = btnWidth + 'px'
      // ripple.animate(animationElFrames, timing)
      ripple.classList.add('ripple')
      
      button.append(ripple)
      setTimeout(() => {
         ripple.remove()
      }, duration)
   })
}

