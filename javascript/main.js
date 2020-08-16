// ! Toggle Menu Active Disconnect
const toggle = document.querySelector(".toggle_menu");
toggle.addEventListener("click", function(){
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active_menu");
});

//!     Smooth Scrolling
$(".nav a").on("click", function(e){
    if(this.hash !== ""){
        e.preventDefault();
        const hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 700);
    }
});

$(".header_part .header_part_container .header_title .header_btn").on("click", function(e){
    if(this.hash !== ""){
        e.preventDefault();
        const hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 700);
    }
});

//   ! Popup Image Script

$(document).ready(function () { 
    
});

$('.test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
    // other options
});

// ! Add Id for change popup image style

// const select_image = document.querySelectorAll(".image_gallery .container a");

// select_image.addEventListener("click",popupAddId);

// document.querySelector(".image_gallery .container a").addEventListener("click",popupAddId);

// function popupAddId(){
//     const target_popup_container = document.getElementsByClassName("mfp-container")[0];
//     target_popup_container.id = "manual_image_container";
//     console.log("popup function done");
//     alert();
// }
    // const target_popup_container = document.getElementsByClassName("mfp-container")[0];
    // target_popup_container.id = "manual_image_container";