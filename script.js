var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



var tl = gsap.timeline();
tl.from("#nev",{
    y:-100,
    opacity:0,
    ease:Bounce.easeOut,
    duration:0.5,

})
.from("#page1 h1",{
    opacity:0,
    duration:.3,
    ease:Expo.easeInOut
},"-=.5")
.from("#img1",{
    y:100,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5

},"-=.3")
.from("#img2",{
    x:100,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5

},"-=1")
.from("#img3",{
    y:-100,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5

},"-=1")
gsap.from("#page3",{
    scrollTrigger:{
        trigger:"#page3",
        scroll:"body",
        start:"top 70%",
    },
    opacity:0,
    y:100,
    duration:2,
    ease:Expo.easeInOut,
})
gsap.from("#page2 h4,#page2 h2, h5",{
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        start:"top 60%"
    },
    stagger:1,
    opacity:0,
    y:20
})


var menu = document.querySelector("#men")
var nv = document.querySelector("#nv")
var flag = 0;
menu.addEventListener("click",function(){
if (flag===0){
    menu.className = "ri-close-fill";
    nv.style.bottom="10%";
    flag=1;
}else{
    menu.className="ri-menu-3-line";
    nv.style.bottom="-100%";
    flag=0;
}
});

