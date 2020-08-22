import axios from 'axios';

const search = document.querySelector('.search__bar');
const form = document.querySelector('#search');
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

const img =
  'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0';

form.addEventListener('submit', async (e) => {
  leftSide.innerHTML = '';
  rightSide.innerHTML = '';
  e.preventDefault();
  const response = await axios.get(
    `https://api.thesneakerdatabase.com/v1/sneakers?limit=26&brand=${search.value}`
  );
  const responseData = response.data.results;
  const left = responseData.splice(0, Math.floor(responseData.length / 2));
  const right = responseData.splice(left, responseData.length);
  left.forEach((el) => leftShowOutput(el));
  right.forEach((el) => rightShowOutput(el));
});

function leftShowOutput(res) {
  leftSide.innerHTML += `
  <div class="col-sm-4">
  <div class="card mb-4" style="background: transparent">
  <img 
      class="card-img-top"
      src=${!res.media.thumbUrl ? img : res.media.thumbUrl}
      alt="air5">
      <div class="card-body" >
        <p class="card-text text-white">
          ${res.colorway}
        </p>
      </div>
     </div>  
  </div>  
        `;
}

function rightShowOutput(res) {
  rightSide.innerHTML += `
      <div class="col-sm-4">
      <div class="card mb-4" style="background: transparent">
      <img 
          class="card-img-top"
          src=${!res.media.thumbUrl ? img : res.media.thumbUrl}
          alt="air5">
          <div class="card-body" >
            <p class="card-text text-white">
              ${res.colorway}
            </p>
          </div>
         </div>  
      </div>  
        `;
}
