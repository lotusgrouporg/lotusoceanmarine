document.querySelector("#HoverEft .left")
.addEventListener("mousemove", function(){
    document.querySelector(".c-center-one").style.height = "100vh"
    document.querySelector("#btn-lft").style.backgroundColor = "#333"
    document.querySelector("#btn-lft").style.color = "#fff"
    document.querySelector("#btn-lft").style.border = "none"
    document.querySelector(".left").style.cursor = "pointer"
    document.querySelector("#one").style.width = "25vw"
    document.querySelector("#one").style.height = "25vh"
    document.querySelector("#one").style.opacity = "1"
    document.querySelector("#one").style.filter= "blur(0.5px)"
    document.querySelector("#two").style.width = "15vw"
    document.querySelector("#two").style.height = "17vh"
    document.querySelector("#two").style.opacity = "1"
    document.querySelector("#two").style.filter= "blur(5px)"
    document.querySelector("#three").style.width = "10vw"
    document.querySelector("#three").style.height = "12vh"
    document.querySelector("#three").style.opacity = "0.5"
    document.querySelector("#three").style.filter= "blur(20px)"
    document.querySelector("#four").style.width = "7vw"
    document.querySelector("#four").style.height = "7vh"
    document.querySelector("#four").style.opacity = "0.3"
    document.querySelector("#four").style.filter= "blur(20px)"

})

document.querySelector("#HoverEft .left")
.addEventListener("mouseleave", function(){
    document.querySelector(".c-center-one").style.height = "0vh"
    document.querySelector("#btn-lft").style.backgroundColor = "initial"
    document.querySelector("#btn-lft").style.border = "1px solid #333"
    document.querySelector("#btn-lft").style.color = "initial"
    document.querySelector("#one").style.width = "15vw"
    document.querySelector("#one").style.height = "10vh"
    document.querySelector("#one").style.opacity= "0"
    document.querySelector("#one").style.filter= "blur(10px)"
    document.querySelector("#two").style.width = "10vw"
    document.querySelector("#two").style.height = "10vh"
    document.querySelector("#two").style.opacity= "0"
    document.querySelector("#two").style.filter= "blur(10px)"
    document.querySelector("#three").style.width = "7vw"
    document.querySelector("#three").style.height = "9vh"
    document.querySelector("#three").style.opacity= "0"
    document.querySelector("#three").style.filter= "blur(50px)"
    document.querySelector("#four").style.width = "5vw"
    document.querySelector("#four").style.height = "5vh"
    document.querySelector("#four").style.opacity= "0"
    document.querySelector("#four").style.filter= "blur(50px)"
})


document.querySelector("#HoverEft .right")
.addEventListener("mousemove", function(){
    document.querySelector(".c-center-two").style.height = "100vh"
    document.querySelector("#btn-rght").style.backgroundColor = "#333"
    document.querySelector("#btn-rght").style.color = "#fff"
    document.querySelector("#btn-rght").style.border = "none"
    document.querySelector(".right").style.cursor = "pointer"
    document.querySelector("#five").style.width = "25vw"
    document.querySelector("#five").style.height = "25vh"
    document.querySelector("#five").style.opacity = "1"
    document.querySelector("#five").style.filter= "blur(0.5px)"
    document.querySelector("#six").style.width = "15vw"
    document.querySelector("#six").style.height = "17vh"
    document.querySelector("#six").style.opacity = "1"
    document.querySelector("#six").style.filter= "blur(5px)"
    document.querySelector("#seven").style.width = "10vw"
    document.querySelector("#seven").style.height = "12vh"
    document.querySelector("#seven").style.opacity = "0.5"
    document.querySelector("#seven").style.filter= "blur(20px)"
    document.querySelector("#eight").style.width = "7vw"
    document.querySelector("#eight").style.height = "7vh"
    document.querySelector("#eight").style.opacity = "0.3"
    document.querySelector("#eight").style.filter= "blur(20px)"
})

document.querySelector("#HoverEft .right")
.addEventListener("mouseleave", function(){
    document.querySelector(".c-center-two").style.height = "0vh"
    document.querySelector("#btn-rght").style.backgroundColor = "initial"
    document.querySelector("#btn-rght").style.border = "1px solid #333"
    document.querySelector("#btn-rght").style.color = "initial"
    document.querySelector("#five").style.width = "15vw"
    document.querySelector("#five").style.height = "10vh"
    document.querySelector("#five").style.opacity= "0"
    document.querySelector("#five").style.filter= "blur(10px)"
    document.querySelector("#six").style.width = "10vw"
    document.querySelector("#six").style.height = "10vh"
    document.querySelector("#six").style.opacity= "0"
    document.querySelector("#six").style.filter= "blur(10px)"
    document.querySelector("#seven").style.width = "7vw"
    document.querySelector("#seven").style.height = "9vh"
    document.querySelector("#seven").style.opacity= "0"
    document.querySelector("#seven").style.filter= "blur(50px)"
    document.querySelector("#eight").style.width = "5vw"
    document.querySelector("#eight").style.height = "5vh"
    document.querySelector("#eight").style.opacity= "0"
    document.querySelector("#eight").style.filter= "blur(50px)"
})




// hover bg show 

function elembg(){
    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector("#page2")

    elems.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`;
        page2.style.backgroundSize = "cover";
        page2.style.backgroundRepeat = "no-repeat";
        
        })

    })
}
elembg()