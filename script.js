let name = 'defunkt';
let newUser;
let href = document.location.href;
const userAva = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const userLink = document.getElementById('link');

const requestUrl = function () {
  let user = href.split('=');
  if (user[1]) {
    username = user[1];
  } else {
    username = name;
  };
  return 'https://api.github.com/users/' + username;
}

let apiLink = requestUrl();

const renderCard = function (obj) {
  if (obj[0] != undefined) {
    userAva.src = obj.avatar_url;
    userName.innerHTML = obj.name;
    userLink.href = obj.html_url;
    userBio.innerHTML = obj.bio;
  } else {
    console.log('Информация о пользователе недоступна.')
  }
}

fetch(apiLink)
    .then(res => { return res.json()})
    .then(userData => renderCard(userData))
    .catch(err => console.log(err));

