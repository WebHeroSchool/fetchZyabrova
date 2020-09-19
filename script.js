let name = 'ZyabrovaOlga';
let newUser;
let href = document.location.href;
const userAva = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const userLink = document.getElementById('link');
const date = document.getElementById('date');

let preloader = document.getElementById('preloader');

setTimeout(function() {
	preloader.classList.add('hidden');
}, 2000);

const requestUrl = function () {
  let user = href.split('=');
  if (user[1]) {
    username = user[1];
  } else {
    username = name
  };
  return 'https://api.github.com/users/' + username;
}

let apiLink = requestUrl();

let currentDate = new Date();

const getDate = new Promise((resolve, reject) => {
  setTimeout(() => currentDate ? resolve(date.innerHTML = currentDate.toDateString()) : reject('Не удалось получить дату'), 2000);
})

const renderCard = function (obj) {
  userAva.src = obj.avatar_url;
  userLink.innerHTML = obj.login;
  userLink.href = obj.html_url;
  if (obj.bio != null) {
    userBio.innerHTML = obj.bio;
  } else {
    userBio.innerHTML = console.log('Информация о пользователе недоступна.')
  }
}

fetch(apiLink)
Promise.all([getDate])
    .then(() => fetch(apiLink))
    .then(res => res.json())
    .then(obj => newUser = Object.assign({}, obj))
    .then(newUser => renderCard(newUser))
    .catch(err => console.error(err));