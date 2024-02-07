$(function () {

   console.log($("header .second-line__logo"));
   console.log($("a:has(img)"));
   console.log($("a:has(img):even"));
   console.log($("a:has(img):odd"));
   console.log($("div:not(div[class])"));
   console.log($("div:contains(viverra)"));
   console.log($("a:first"));
   console.log($("div:last"));
   console.log($("img:hidden"));
   console.log($("img:visible"));

   const watchPrice = $(".watch-price a");
   console.log(watchPrice.text());

   watchPrice.hide().text("40 000 грн").show(3000);

   const titleBlock = $(".square");
   console.log("Width: " + titleBlock.width() + " and height: " + titleBlock.height());

   titleBlock.width(280);
   titleBlock.height(380);
   console.log("Width: " + titleBlock.width() + " and height: " + titleBlock.height());

   console.log(titleBlock.html());
   titleBlock.html(`  <div class="heading">
   <h1 class="porten">PORTEN</h1>
   <div class="line1"></div>
   <p class="city"><b>Бавовна</b></p>
 </div>`);

   titleBlock.fadeOut(3000).fadeIn(3000).fadeTo(2000, 0.2).fadeTo(2000, 1).slideUp(2000).slideDown(2000).slideToggle(2000).slideDown(2000);

   $(".watch-img").attr("alt", "Clock");
   //$(".watch-img").removeAttr("alt", "Clock");

   $("a").addClass("link");
   //$("a").removeClass("link");

   $(".second-line__logo").css("color", "purple");

   watchPrice.animate({ "color": "green" }, 2000).css({
      "color": "yellow",
      "font-size": "24px"
   });

   console.log($(".first-screen-content .content"));
   $(".first-screen-content .content").animate({
      "font-size": "10px"
   }, 3000,);

   const newColectionSection = $(".new_collection_box");
   newColectionSection.before("<div>Before!</div>");
   newColectionSection.after("<div>After!</div>");
   newColectionSection.prepend($(".new_collection_catalog"));

   const buttonClone = $(".new_collection_catalog").clone();
   newColectionSection.append(buttonClone.text("Clone"));

   $(".new_season_line_2").remove();

   $("div").each(function () {
      if ($(this).hasClass("new_collection_header")) {
         $(this).css("color", "red");
      }
   })

   console.log("What is the number of element:" + watchPrice.length);

   $(".collection_2018_box_header, .collection_2018_box_content").css("color", "pink");

   $(".header__second-line .second-line__logo").on("click", function (event) {
      console.log(event.target.className + " " + event.altKey);

   })
   $(".link").on("click", function (e) {
      e.preventDefault();
   })

   $(":submit").css("color", "red");
   $(":text").on("input", function (e) {
      console.log($(this).val())
   })
   console.log($(":text").val());


   $("form").on("submit", function (e) {
      console.log("Hello");
      e.preventDefault();
   });

   $(":text").on("focus", function (e) {
      console.log($(this).css("background", "yellow"))
   });

   $(":text").on("blur", function (e) {
      console.log($(this).css("background", ""))
   })
})

