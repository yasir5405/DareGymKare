        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        window.addEventListener('mousemove', (e) => {
        const x = e.clientX - cursor.offsetWidth / 2;
        const y = e.clientY - cursor.offsetHeight /2;
        cursor.style.transform = `translate(${x}px, ${y}px)`
        })

        // Lenis
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        // console.log(e)
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        const courseBG = document.querySelector('.courseBG');
        const courseDetails = document.querySelector('.courseDetails')

        const getQueryParameter = (name) => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        const courseIndex = getQueryParameter('index');
        console.log(courseIndex)
        // Fetch the articles again
        fetch('./courses.json')
          .then(response => response.json())
          .then(data => {
            const course = data[courseIndex];  

            courseBG.style.background = `url(${course.imgSrc})`
            courseBG.style.backgroundSize = 'cover';
            document.getElementById('title').innerHTML = course.title;

            const features = course.features;

            for(let i = 1; i <= 5; i++){
              const p = document.createElement('p');
              p.innerHTML = `✅&nbsp; ${features[i]}`;
              courseDetails.appendChild(p);
            }

            const prices = course.price
            const priceText = document.createElement('p');
            priceText.innerHTML = `Price:&nbsp; ${prices}`;
            priceText.classList.add('priceText')
            courseDetails.appendChild(priceText);
          })
          .catch(error => console.error('Error loading article data:', error));

// Scroll to buy section
const atag = document.querySelector('.atag')
atag.addEventListener('click', (e) => {
  e.preventDefault();
    const targetId = atag.getAttribute('href');
    console.log(targetId)
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
})


// Responsive part
// Hamburger
const menu = document.querySelector('nav h3');
const full = document.querySelector('#full-scr');
const navImg = document.querySelector('nav img')
var flag = 0;
menu.addEventListener('click', () => {
  if(flag == 0){
    navImg.style.opacity = 0;
    full.style.top = 0;
    flag = 1;
  }else{
    navImg.style.opacity = 1;
    full.style.top = '-100%';
    flag = 0;
  }
})

const firstLine = document.querySelector('.firstline');
const secondLine = document.querySelector('.secondline');
var flag1 = 0;
menu.addEventListener('click', () => {
  if(flag1 == 0){
    firstLine.classList.add('active')
    secondLine.classList.add('active')
    flag1=1;
  }
  else{
    firstLine.classList.remove('active')
    secondLine.classList.remove('active')
    flag1=0;
  }
})