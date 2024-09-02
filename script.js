// Lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Custom Cursor
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.x}px`;
    cursor.style.top =  `${e.y}px`;
})

// Hover Active
var elemC = document.querySelector('.elem-container')
var fixedImage = document.querySelector('.fixed-image')
elemC.addEventListener('mouseenter', () => {
  fixedImage.style.display = 'initial';
})
elemC.addEventListener("mouseleave", () => {
  fixedImage.style.display = 'none';
})


var elems = document.querySelectorAll('.elem');
elems.forEach((elem) => {
  var image = elem.getAttribute('data-image');
  elem.addEventListener('mouseenter', () => {
    fixedImage.style.backgroundImage = `url(${image})`
  })
});

// Page 4
const headings = document.querySelectorAll('.headings h1');
const p4_right_div = document.querySelector('.page4right');

let text = document.querySelector('.texts1 p');

// Set the first one heading active by default
if(headings.length > 0){
  headings[0].style.color = 'white';
  headings[0].classList.add('active'); 
  const firstImage = headings[0].getAttribute('data-image');
  p4_right_div.style.backgroundImage = `url(${firstImage})`
  const firstText = headings[0].getAttribute('data-text');
  text.textContent = firstText;
}


console.log(text.innerHTML);
// 4th Page
headings.forEach((heading) => {
  let img = heading.getAttribute('data-image');
  let text1 = heading.getAttribute('data-text');
  heading.addEventListener('click', () => {
    headings.forEach((h) => {
      h.style.color = '#423B37';
      h.classList.remove('active'); 
    });
    heading.style.color = 'white';
    heading.classList.add('active');
    p4_right_div.style.backgroundImage = `url(${img})`
    text.textContent = text1;
    heading.style.setProperty('--before-color', 'white')
  })
});


// Login
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
})
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
})
btnPopup.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
})

// SwiperJS
const swiperAnimation = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();

// Custom Cursor for Swiper
const customCursor = document.querySelector('.swiper-custom-cursor');
const swiperDiv = document.querySelector('.swiper');
swiperDiv.addEventListener('mouseenter', (e) => {
  customCursor.style.transform = 'scale(1)'
  cursor.style.display = 'none';
})
swiperDiv.addEventListener('mouseleave', () => {
  customCursor.style.transform = 'scale(0)'
  cursor.style.display = 'initial';
})

swiperDiv.addEventListener('mousemove', (event) => {
  const rect = swiperDiv.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;
});

// Footer
