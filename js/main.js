$(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
        items:4,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav:true,
        smartSpeed:1000,
    })

    // brands logos slider
    $('.owl-carousel2').owlCarousel({
        items:5,
        loop:true,
        margin:40,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav:true,
        smartSpeed:2000,
    })
  });

  const nav=document.querySelector('.nav-main');
  const banner=document.querySelector('.banner-main');
  
  function navcontrol(){
     if(window.scrollY>=(nav.offsetHeight*1.5)){
         nav.classList.add("active");
     }
     else{
        nav.classList.remove("active")
     }
  }

  window.addEventListener("scroll",navcontrol)