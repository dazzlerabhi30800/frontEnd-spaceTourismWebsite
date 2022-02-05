console.log('hello');
const users = JSON.parse(data);
const crews = document.querySelector('.crew');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');

first.addEventListener('click', () => {
    if(third.classList.contains('active') || second.classList.contains('active') || fourth.classList.contains('active')) {
        first.classList.remove('active');
        second.classList.remove('active');
        third.classList.add('active');
        fourth.classList.remove('active');
    }

    crews.innerHTML = `
    <div class="crew-wrapper">
    <h1 class="crew-picker">01 <span>MEET YOUR CREW</span></h1>
    <div class="crew-img">
        <img src="${users[0].crew[3].images.png}" alt="crew-image" class="crewImg">
      </div>
  </div>

  <div class="info-wrapper">
      <ul class="crew-list">
          <li class="crew-item">
              <a id="first"  class="crew-link active"></a>
          </li>
          <li class="crew-item">
              <a id="second"  class="crew-link"></a>
          </li>
          <li class="crew-item">
              <a id="third"  class="crew-link"></a>
          </li>
          <li class="crew-item">
              <a id="fourth" class="crew-link"></a>
          </li>
      </ul>
      
      <div class="crew-description">
          <h1 class="crew-title">${users[0].crew[3].role}</h1>
          <h2 class="crew-name">${users[0].crew[3].name}</h2>
          <p class="crew-info">
              ${users[0].crew[3].bio}
          </p>
      </div>     
  </div>
    `
})
second.addEventListener('click', () => {
    console.log('second clicked!');
    if(first.classList.contains('active') || third.classList.contains('active') || fourth.classList.contains('active')) {
        first.classList.remove('active');
        second.classList.add('active');
        third.classList.remove('active');
        fourth.classList.remove('active');
    };
    crews.innerHTML = `
    <div class="crew-wrapper">
    <h1 class="crew-picker">01 <span>MEET YOUR CREW</span></h1>
    <div class="crew-img">
        <img src="${users[0].crew[0].images.png}" alt="crew-image" class="crewImg">
      </div>
  </div>

  <div class="info-wrapper">
      <ul class="crew-list">
          <li class="crew-item">
              <a id="first"  class="crew-link "></a>
          </li>
          <li class="crew-item">
              <a id="second"  class="crew-link active"></a>
          </li>
          <li class="crew-item">
              <a id="third"  class="crew-link"></a>
          </li>
          <li class="crew-item">
              <a id="fourth" class="crew-link"></a>
          </li>
      </ul>
      
      <div class="crew-description">
          <h1 class="crew-title">${users[0].crew[0].role}</h1>
          <h2 class="crew-name">${users[0].crew[0].name}</h2>
          <p class="crew-info">
              ${users[0].crew[0].bio}
          </p>
      </div>     
  </div>
    `
});

third.addEventListener('click', () => {
    console.log("third clicked!");
    if(first.classList.contains('active') || second.classList.contains('active') || fourth.classList.contains('active')) {
        first.classList.remove('active');
        second.classList.remove('active');
        third.classList.add('active');
        fourth.classList.remove('active');
    }
    crews.innerHTML = `
    <div class="crew-wrapper">
    <h1 class="crew-picker">01 <span>MEET YOUR CREW</span></h1>
    <div class="crew-img">
        <img src="${users[0].crew[1].images.png}" alt="crew-image" class="crewImg">
      </div>
  </div>

  <div class="info-wrapper">  
  <ul class="crew-list">
          <li class="crew-item">
              <a id="first"  class="crew-link "></a>
          </li>
          <li class="crew-item">
              <a id="second"  class="crew-link "></a>
          </li>
          <li class="crew-item">
              <a id="third"  class="crew-link active"></a>
          </li>
          <li class="crew-item">
              <a id="fourth" class="crew-link"></a>
          </li>
      </ul>
      <div class="crew-description">
          <h1 class="crew-title">${users[0].crew[1].role}</h1>
          <h2 class="crew-name">${users[0].crew[1].name}</h2>
          <p class="crew-info">
              ${users[0].crew[1].bio}
          </p>
      </div>     
  </div>
    `
});
fourth.addEventListener('click', () => {
    first.classList.remove('active');
    second.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.add('active');
    crews.innerHTML = `
    <div class="crew-wrapper">
    <h1 class="crew-picker">01 <span>MEET YOUR CREW</span></h1>
    <div class="crew-img">
        <img src="${users[0].crew[2].images.png}" alt="crew-image" class="crewImg">
      </div>
  </div>

  <div class="info-wrapper">  
  <ul class="crew-list">
          <li class="crew-item">
              <a id="first"  class="crew-link "></a>
          </li>
          <li class="crew-item">
              <a id="second"  class="crew-link "></a>
          </li>
          <li class="crew-item">
              <a id="third"  class="crew-link"></a>
          </li>
          <li class="crew-item">
              <a id="fourth" class="crew-link active"></a>
          </li>
      </ul>
      <div class="crew-description">
          <h1 class="crew-title">${users[0].crew[2].role}</h1>
          <h2 class="crew-name">${users[0].crew[2].name}</h2>
          <p class="crew-info">
              ${users[0].crew[2].bio}
          </p>
      </div>     
  </div>
    `
});

console.log(users[0].crew[0].bio)
console.log(users[0].destinations[0].images.png);
// console.log(users.crew[0].images.png);