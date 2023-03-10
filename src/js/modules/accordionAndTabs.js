/**
 * 
 * @param {''} whatsThis whatsThis: 'accordion', 'tabs', 'accordionAndTabs'  
 * @param {''} title title: HTMLCollection селектор видимых навигационных элементов '.title'
 * @param {''} collapse collapse: HTMLCollection селектор скрытых элементов '.collapse'
 */

export function AccordionAndTabs({ target, title, collapse, firstHide = true }) {

   // accordion

   if (target == 'accordion') {
      $(collapse).hide()
      $(title).on('click', function () {
         $(title).not($(this)).removeClass('active')
         $(collapse).not($(this).children(collapse)).slideUp()
         $(this).toggleClass('active').children(collapse).slideToggle();
      })
   }


   
   // tabs

   if (target == 'tabs') {
      if (firstHide) 
         $(collapse).hide();
      else $(collapse).not(':first').hide();
         
      $(title).on('click', function () {
         $(title).removeClass('active').eq($(this).index()).addClass('active');
         $(collapse).hide().eq($(this).index()).fadeIn('500');
      })
   }
}