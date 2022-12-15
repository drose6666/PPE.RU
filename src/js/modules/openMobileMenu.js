export default class openMobileMenu {
   constructor (selectorMenu, selectorClose, burger, overlay) {
      this.$selectorMenu = document.querySelector(selectorMenu)
      this.$selectorClose = document.querySelector(selectorClose)
      this.$burger = document.querySelector(burger)
      this.$overlay = document.querySelector(overlay)

      this.#setup()
   }

   #setup = () => {
      this.$burger?.addEventListener('click', this.#open)
      this.$overlay?.addEventListener('click', this.#close)
      this.$selectorClose?.addEventListener('click', this.#close)
      document.body?.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.#close()
      })
   }

   #open = () => {
      this.$selectorMenu.classList.add('active')
      this.$overlay.classList.add('active')
   }

   #close = () => {
      this.$selectorMenu.classList.remove('active')
      this.$overlay.classList.remove('active')
   }
}