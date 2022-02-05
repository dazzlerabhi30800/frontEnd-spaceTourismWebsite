const menuBtn = document.querySelector('.menu-btn i');
const logoBtn = document.querySelector('.logoBtn');
const navbar  = document.querySelector('.navbar');
const home = document.querySelector('#home');
const destination = document.querySelector('#destination');
const crew = document.querySelector('#crew');
const technology = document.querySelector('#technology');


const handleClick = () => {
    menuBtn.classList.toggle('fa-times');
    // logoBtn.classList.toggle('active');
    navbar.classList.toggle('active');
}

menuBtn.addEventListener('click', handleClick);

home.addEventListener('click', () => {
    home.classList.add('active');
    destination.classList.remove('active');
    crew.classList.remove('active');
    technology.classList.remove('active');
})
destination.addEventListener('click', () => {
    home.classList.remove('active');
    destination.classList.add('active');
    crew.classList.remove('active');
    technology.classList.remove('active');
})
crew.addEventListener('click', () => {
    home.classList.remove('active');
    destination.classList.remove('active');
    crew.classList.add('active');
    technology.classList.remove('active');
})
technology.addEventListener('click', () => {
    home.classList.remove('active');
    destination.classList.remove('active');
    crew.classList.remove('active');
    technology.classList.add('active');
})