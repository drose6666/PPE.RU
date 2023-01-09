export default class openMobileMenu {
   constructor (selectorMenu, selectorClose, selectorOpen, overlay, closeItems) {
      this.$selectorMenu = document.querySelector(selectorMenu)
      this.$selectorClose = document.querySelector(selectorClose)
      this.$selectorOpen = document.querySelectorAll(selectorOpen)
      this.$overlay = document.querySelector(overlay)
      this.$mobContent = document.querySelector('.m-body')
      this.$closeItems = document.querySelectorAll(closeItems)

      this.#setup()
   }

   #setup = () => {
      for (let i = 0; i < this.$selectorOpen.length; i++) {
         this.$selectorOpen[i].addEventListener('click', this.open)
      }

      for (let i = 0; i < this.$closeItems.length; i++) {
         this.$closeItems[i].addEventListener('click', this.close)
      }

      this.$overlay?.addEventListener('click', this.close)
      this.$selectorClose?.addEventListener('click', this.close)
      document.body?.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.close()
      })
   }

   open = () => {
      this.$selectorMenu.classList.add('active')
      this.$overlay.classList.add('active')
      this.$mobContent.classList.add('active')
      document.body.classList.add('no-scroll')
   }

   close = () => {
      this.$selectorMenu.classList.remove('active')
      this.$overlay.classList.remove('active')
      this.$mobContent.classList.remove('active')
      document.body.classList.remove('no-scroll')
   }
}