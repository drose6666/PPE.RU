export default class openPopup {
   constructor (
      popup, 
      openBtn, 
      closeBtn, 
      overlay = null, 
      hasFrame = false, 
      whereInsert = null, 
      frame = null
      ) {
         this.$popup = document.querySelector(popup)
         this.$openBtn = document.querySelectorAll(openBtn)
         this.$closeBtn = document.querySelector(closeBtn)
         this.$overlay = document.querySelector(overlay)
         this.$whereInsert = document.querySelector(whereInsert)
         this.hasFrame = hasFrame
         this.frame = frame

         this.#setup()
   }

   #setup = () => {
      for (let i = 0; i < this.$openBtn.length; i++) {
         this.$openBtn[i].addEventListener('click', this.open)
      }

      this.$overlay?.addEventListener('click', this.close)
      this.$closeBtn?.addEventListener('click', this.close)
      document.body?.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.close()
      })
   }

   open = () => {
      this.$popup.classList.add('active')
      document.body.classList.add('no-scroll')
      
      if (this.hasFrame) {
         this.insertIframe()
      }
   }

   close = () => {
      this.$popup.classList.remove('active')
      document.body.classList.remove('no-scroll')

      if (this.hasFrame) this.deleteFrame()
      
   }

   insertIframe = () => {
      this.$whereInsert.insertAdjacentHTML('afterbegin', this.frame)
   }

   deleteFrame = () => {
      if (this.$whereInsert.querySelector('iframe'))
         this.$whereInsert.querySelector('iframe').remove()
   }
}