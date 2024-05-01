// top hover text 
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 10 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }
  
    /**
     * Mobile nav toggle
     */
  
    const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');
  
    if (mobileNavToogleButton) {
      mobileNavToogleButton.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
      });
    }
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToogleButton.classList.toggle('fa-bars-staggered');
      mobileNavToogleButton.classList.toggle('fa-xmark');
    }
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
      if (!navbarlink.hash) return;
  
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
  
      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  
    navDropdowns.forEach(el => {
      el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');
  
          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });
  
    
    
  
    /**
     * Open and close the search form.
     */
    const searchOpen = document.querySelector('.js-search-open');
    const searchClose = document.querySelector('.js-search-close');
    const searchWrap = document.querySelector(".js-search-form-wrap");
  
    searchOpen.addEventListener("click", (e) => {
      e.preventDefault();
      searchWrap.classList.add("active");
    });
  
    searchClose.addEventListener("click", (e) => {
      e.preventDefault();
      searchWrap.classList.remove("active");
    });
  
    // GLightbox
    const glightbox = GLightbox({
      openEffect: 'zoom',
      closeEffect: 'fade',
      cssEfects: {
      // This are some of the animations included, no need to overwrite
      fade: { in: 'fadeIn', out: 'fadeOut' },
      zoom: { in: 'zoomIn', out: 'zoomOut' }
      }
    });


   







    /**
     * Animation on scroll function and init
     */
    // function aos_init() {
    //   AOS.init({
    //     duration: 1000,
    //     easing: 'ease-in-out',
    //     once: true,
    //     mirror: false
    //   });
    // }
    // window.addEventListener('load', () => {
    //   aos_init();
    // });

    // top hover text 






  
  });



  // lOADER 
  function loading(){

    var tl = gsap.timeline()

    tl.to("#yellow1",{
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"

    });

    tl.from("#yellow2",{
        top: "100%",
        delay: 0.7,
        duration: 0.7,
        ease: "expo.out"

    },"anim");

    tl.to("#loader h1",{
        color: "#000",
        delay: 0.6,
        duration: 0.7,
    },"anim");

    tl.to("#loader ",{
        opacity: 0

    });
    tl.to("#loader ",{
        display: "none"

    });

  }
  loading()
// lOADER 


// tESTIMONIALS 

function testimonials(){
   // testimonials slider 
  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:true,
        autoPlay:true
    });
  });
  // testimonials slider 
}
testimonials()
// tESTIMONIALS 


// curser dots 
var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

// curser dots 



// counter functions 
var counter = document.querySelectorAll(".counter")
window.addEventListener("load", function() {
counter.forEach(function(k, v) {
  
var start = counter[v].getAttribute('data-count-start')
var end = counter[v].getAttribute('data-count-end')
var speed = counter[v].getAttribute('data-speed')

setInterval(function() {
  start++;
  if(start > end) {
    return false;
  }
  counter[v].innerText = start;

  }, speed)
})

}, false)
// counter functions 



