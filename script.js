const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// Above Lenis

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
