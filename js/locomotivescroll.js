// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }

// init()



var tl = gsap.timeline({scrollTrigger:{

    trigger:".scroll-img",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    scrub:5,
    duration: 1,
    pin:true,
  }});
  tl
  .to(".scroll-img .img",{
    width: "100vw",
    height: "100vh",
  })





// lOADER 
function trans(){

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4 h1",
            scroller: "#main",
            // markers:true,
            start: "top -115%",
            end: "top -120%",
            scrub: 3
        }
    })
    tl2.to("#page3", {
        backgroundColor: "#000",
    })

    // tr.from("#yellow2",{
    //     top: "100%",
    //     delay: 0.7,
    //     duration: 0.7,
    //     ease: "expo.out"

    // },"anim");

   
  }
  trans()
// lOADER 