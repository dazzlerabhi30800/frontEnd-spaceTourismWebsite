const users = JSON.parse(data);
console.log(users);
console.log(users[0].crew[0].images.png)

const img = document.querySelector('.crewImg');
const title = document.querySelector('.crew-title');
const cName = document.querySelector('.crew-name');
const info = document.querySelector('.crew-info');

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');

first.addEventListener('click', () => {
    first.classList.add('active');
    second.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.remove('active');

    img.src = `${users[0].crew[3].images.png}`;
    title.innerText = `${users[0].crew[3].role}`;
    cName.innerText = `${users[0].crew[3].name}`;
    info.innerText = `${users[0].crew[3].bio}`;
});

second.addEventListener('click', () => {
    first.classList.remove('active');
    second.classList.add('active');
    third.classList.remove('active');
    fourth.classList.remove('active');

    img.src = `${users[0].crew[0].images.png}`;
    title.innerText = `${users[0].crew[0].role}`;
    cName.innerText = `${users[0].crew[0].name}`;
    info.innerText = `${users[0].crew[0].bio}`;
})

third.addEventListener('click', () => {
    first.classList.remove('active');
    second.classList.remove('active');
    third.classList.add('active');
    fourth.classList.remove('active');

    img.src = `${users[0].crew[1].images.png}`;
    title.innerText = `${users[0].crew[1].role}`;
    cName.innerText = `${users[0].crew[1].name}`;
    info.innerText = `${users[0].crew[1].bio}`;
})
fourth.addEventListener('click', () => {
    first.classList.remove('active');
    second.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.add('active');

    img.src = `${users[0].crew[2].images.png}`;
    title.innerText = `${users[0].crew[2].role}`;
    cName.innerText = `${users[0].crew[2].name}`;
    info.innerText = `${users[0].crew[2].bio}`;
})