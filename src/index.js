import axios from 'axios';

$(function () {
  $('#loginBtn').click(() => {
    $('#loginModal').modal();
  });
  $('#signUpbtn').click(() => {
    $('#signUpModal').modal();
  });
});

let container = document.querySelector('container__hero');

async function getShoes() {
  const res = await axios.get(
    'https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=supreme&brand=nike'
  );
  const shoes = await res.data.results;
  console.log(shoes);
}

getShoes();

if (module.hot) {
  module.hot.accept();
}
