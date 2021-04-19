/***
Website Menu JS
***/
$(window).scroll(function() {
 let headerSM = $('header');
 let logoSM = $('#logo');
 let navSM = $('.nav_links');
 var winPosY = window.scrollY;

 headerSM.toggleClass('sticky sizeDown', winPosY > 0);
 logoSM.toggleClass('logoSM', winPosY > 0);
 navSM.toggleClass('navtxtSM', winPosY > 0);

});
