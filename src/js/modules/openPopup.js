export default class openPopup {
   constructor(popup, openBtn, closeBtn, overlay, target = '') {
      this.$popup = document.querySelector(popup)
      this.$openBtn = document.querySelector(openBtn)
      this.$closeBtn = document.querySelector(closeBtn)
      this.$overlay = document.querySelector(overlay)
      this.target = target

      this.#setup()
   }

   #setup = () => {
      this.$openBtn?.addEventListener('click', this.open)
      this.$overlay?.addEventListener('click', this.close)
      this.$closeBtn?.addEventListener('click', this.close)
      document.body?.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.close()
      })
   }

   open = () => {
      this.$popup.classList.add('active')
      document.body.classList.add('no-scroll')
   }

   close = () => {
      this.$popup.classList.remove('active')
      document.body.classList.remove('no-scroll')
   }
}