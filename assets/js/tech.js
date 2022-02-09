const user = JSON.parse(data);

console.log(user[0].technology[0]);

const techImg = document.querySelector('.techImg');
const techName = document.querySelector('.tech-name')
const techInfo  = document.querySelector('.tech-info');

const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');

circle1.addEventListener('click', (e) => {
    e.preventDefault();
    circle1.classList.add('active');
    circle2.classList.remove('active');
    circle3.classList.remove('active');
    techImg.src = `${user[0].technology[0].images.landscape}`;
    techName.innerText = `${user[0].technology[0].name}`
    techInfo.innerText = `${user[0].technology[0].description}`
})
circle2.addEventListener('click', (e) => {
    e.preventDefault();
    circle1.classList.remove('active');
    circle2.classList.add('active');
    circle3.classList.remove('active');
    techImg.src = `${user[0].technology[1].images.landscape}`;
    techName.innerText = `${user[0].technology[1].name}`
    techInfo.innerText = `${user[0].technology[1].description}`
})
circle3.addEventListener('click', (e) => {
    e.preventDefault();
    circle1.classList.remove('active');
    circle2.classList.remove('active');
    circle3.classList.add('active');
    techImg.src = `${user[0].technology[2].images.landscape}`;
    techName.innerText = `${user[0].technology[2].name}`
    techInfo.innerText = `${user[0].technology[2].description}`
})