//متغيرات صفحات الهيدر 
let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");
  
let username = localStorage.getItem("username");
 if(username) {
  
  links.remove()
  userInfo.style.display = "flex"
  userDom.innerHTML = username;

 }

 //تسجيل الخروج
 logoutBtn.addEventListener('click', function (){
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  } , 1500)
 });
  
  
//التحقق من وجود حساب 
function checkloginuser(){
  if(localStorage.getItem('username')){
    alert("added to cart");
  } else {
      window.location = "register.html"
  }
}


//تفعيل انيميشن مكتبه واو
    (function ($) {
        "use strict";
        
        // Initiate the wowjs
        new WOW().init();
    
    
        // Fixed Navbar
        $(window).scroll(function () {
            if ($(window).width() < 992) {
                if ($(this).scrollTop() > 45) {
                    $('.fixed-top').addClass('bg-white shadow');
                } else {
                    $('.fixed-top').removeClass('bg-white shadow');
                }
            } else {
                if ($(this).scrollTop() > 45) {
                    $('.fixed-top').addClass('bg-white shadow').css('top', -45);
                } else {
                    $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
                }
            }
        });
        
    })(jQuery);


