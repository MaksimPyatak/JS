$(document).ready(function() {
   $('.second_line__burger').click(function(event){
      $('.second_line__burger, .second-line__menu').toggleClass('active');
      $('body').toggleClass('lock');
      $('.header__zero').toggleClass('sheet');
   });
   $('.last_section__about_store__open').click(function(event){
      $('.last_section__about_store__open, ._section').toggleClass('active1');
   });
   $('.last_section__categories__open').click(function(event){
      $('.last_section__categories__open, ._section').toggleClass('active2');
   });
   $('.last_section__newsletter__open').click(function(event){
      $('.last_section__newsletter__open, ._section').toggleClass('active3');
   });
});
const swiper = new Swiper('.new_arrivals_watch_box__swiper-container', {
   // Optional parameters
   //direction: 'vertical',
   //loop: true,

   //slidesPerView: 'auto',
   
   // If we need pagination
   //pagination: {
   //  el: '.swiper-pagination',
   //},
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   //scrollbar: {
   //  el: '.swiper-scrollbar',
   //},
   //spaceBetween: 130,
   centeredSlides: true,
 });