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

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
const saveData = async () => {
    try{
        const output = await fetchData();
        return output
    } catch(error){
        console.log(error)
    }
}
const container = document.querySelector('.container')

const displayData = (results) => {
    results.forEach((result, index) => {
        const course = document.createElement('div');
        course.classList.add('course');

        const imageBox = document.createElement('div')
        imageBox.classList.add('imageBox')

        const img = document.createElement('img');
        img.setAttribute('src', result.imgSrc);

        const courseTitle = document.createElement('h2');
        courseTitle.innerHTML = result.title;

        const courseDuration = document.createElement('p');
        courseDuration.innerHTML = result.duration;

        const trainerName = document.createElement('p');
        trainerName.innerHTML = result.trainerName;

        const buyContainer = document.createElement('div')
        buyContainer.classList.add('buy');

        const learnMore = document.createElement('button')
        learnMore.innerHTML = 'Learn More'
        learnMore.classList.add('learn-more');
        learnMore.addEventListener('click', () => {
            window.location.href = `courseDetail.html?index=${index}`
        })

        const addToCart = document.createElement('button')
        addToCart.innerHTML = 'Add To Cart';
        addToCart.classList.add('add-to-cart')

        buyContainer.appendChild(learnMore);
        buyContainer.appendChild(addToCart);

        imageBox.appendChild(img);
        course.appendChild(imageBox)
        course.appendChild(courseTitle);
        course.appendChild(courseDuration)
        course.appendChild(trainerName)
        course.appendChild(buyContainer)

        container.appendChild(course);
    });
}

saveData().then(data=> {
    if(data && data.length > 0){
        displayData(data);
    }
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
    full.style.top = '-150%';
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