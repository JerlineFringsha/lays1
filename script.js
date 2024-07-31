// const buttons= document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button=>{
//     button.addEventListener("click",()=>{
//         console.log("button clicked");
//         const offset=button.dataset.carouselButton==="next"?1:-1
//         const slides=button.closest("[data-carousel]").querySelector("[data-slides]")

//         const activeSlide=slides.querySelector("[data-active]")

//         let newIndex=[...slides.children].indexOf(activeSlide)+offset
//         if(newIndex<0)newIndex =slides.children.length-1
//         if(newIndex>=slides.children.length)newIndex=0

//         slides.children[newIndex].dataset.active=true
//         delete activeSlide.dataset.active

//     })
// })
// const boxes=document.querySelector(".boxes");
// const arrowBtns=document.querySelectorAll(".wrapper .boxes i");
// const firstCardWidth=boxes.querySelector(".card").offsetWidth;

// arrowBtns.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         boxes.scrollLeft=btn.id==="left"?-firstCardWidth:firstCardWidth;
//     })

// })
// document.addEventListener("DOMContentLoaded", () => {
//   const headings = document.querySelectorAll(".animate");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   });


//   headings.forEach((heading) => {
//     observer.observe(heading);
//   });
// });

//#PRODUCTS
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const itemWidth = items[0].getBoundingClientRect().width;

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 3) {
    currentIndex++;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }
});

//#RECIPES
// const poster=document.querySelector('.poster');
// const recpies=Array.from(poster.children);
// const next=document.querySelector('.carousel-button-right');
// const prev=document.querySelector('.carousel-button-left');
// const recpiesWidth=recpies[0].getBoundingClientRect().width;

// let nowIndex = 0;

// next.addEventListener('click',()=>{
//   if(nowIndex < recpies.length-3){
//     nowIndex++;
//     poster.style.transform=`translateX(-${recpiesWidth*nowIndex}px)`;
//   }
// });

// prev.addEventListener('click',()=>{
//   if(nowIndex >0){
//     nowIndex--;
//     poster.style.transform=`translateX(-${recpiesWidth*nowIndex}px)`;
//   }
// });

const posterContainer = document.querySelector('.poster-recipes');
const posters = Array.from(posterContainer.children);
const next = document.querySelector('.carousel-button-right');
const prev = document.querySelector('.carousel-button-left');
const posterWidth = posters[0].getBoundingClientRect().width;

let nowIndex = 0;

next.addEventListener('click', () => {
  if (nowIndex < posters.length - 1) { // Adjust according to your display needs
    nowIndex++;
    posterContainer.style.transform = `translateX(-${posterWidth * nowIndex}px)`;
  }
});

prev.addEventListener('click', () => {
  if (nowIndex > 0) {
    nowIndex--;
    posterContainer.style.transform = `translateX(-${posterWidth * nowIndex}px)`;
  }
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('.mobile-nav').classList.toggle('active');
});

// navbar animation
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var menuIcon = document.getElementById('menuIcon');
  var lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
  });

  menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('sticky');
  });
});



