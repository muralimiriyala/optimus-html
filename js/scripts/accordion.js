// jQuery(document).ready(function($){
//     $('.accordion-header').on('click', function(e){
//         e.preventDefault();
//         $(this).parent().toggleClass('active');
//         $(this).parent().siblings().removeClass('active');
//         $(this).parent().siblings().find('.accordion-header').removeClass('open');
//         $(this).toggleClass("open");
//         $(this).siblings('.accordion-content').slideToggle(500);
//         $(this).parent().siblings().find('.accordion-content').slideUp(500);
//     });
// });

const accordion = function(e){
    e.preventDefault();
    const self = this;
    const ele =  self.parentElement;
    const content = self.nextElementSibling;
    ele.classList.toggle("active");
    if(content && content.classList.contains('accordion-content')) {
        content.classList.toggle("open");
    }
    const eleList = document.querySelectorAll('.accordion-list');
        eleList.forEach(item=>{
        if (item !== ele) {
            item.classList.remove("active");
            const itemContent = item.querySelector('.accordion-content');
            if(itemContent) {
                itemContent.classList.remove("open");
            }
        }
    });
}
const accHeaders = document.querySelectorAll(".accordion-header");
accHeaders.forEach(accHeader => { accHeader.addEventListener("click", accordion) });