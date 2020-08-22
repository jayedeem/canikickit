import axios from "axios";


const Ranking = async () => {
  const res = await axios.get(
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=supreme&brand=nike"
  );
  const sneaker = res.data.results[9];
  const template = `
  <div class="container scuffed-chart d-flex ">
    <div class="col-sm-6 ">
    <h4>Most Scuffed</h4>
         <hr>
      <div class="container ranking-container">
       <div class="row">
        <img id="post-img" class="rounded-0 img-thumbnail"src=${sneaker.media.thumbUrl} alt="">
         <div class="ranking">
          <span class="post-ranking">1</span>
          </div>
         <div class="post-info col">
          <a class="post-link" href="#">Scuffed Nikes</a>
          <p class="post-desc">Super Scuffed Nikes right here</p>
         </div>
        </div>
        
      </div>
      <hr>
      <div class="container ranking-container">
       <div class="row">
        <img id="post-img" class="rounded-0 img-thumbnail"src=${sneaker.media.thumbUrl} alt="">
         <div class="ranking">
          <span class="post-ranking">2</span>
          </div>
         <div class="post-info col">
          <a class="post-link" href="#">Scuffed Nikes</a>
          <p class="post-desc">Super Scuffed Nikes right here</p>
         </div>
        </div>
      </div>
      <hr>
      <div class="container ranking-container">
      <div class="row">
       <img id="post-img" class="rounded-0 img-thumbnail"src=${sneaker.media.thumbUrl} alt="">
        <div class="ranking">
         <span class="post-ranking">3</span>
         </div>
        <div class="post-info col">
         <a class="post-link" href="#">Scuffed Nikes</a>
         <p class="post-desc">Super Scuffed Nikes right here</p>
        </div>
       </div>
     </div>
     <hr>
    </div>

    <div class="col-sm-6 ">
    <h4>Most Ranked Brands</h4>
         <hr>
      <div class="container brands-container">
       <div class="row">
       <div class="brands">
          <span class="post-brands">1</span>
        </div>
       
         <div class="brands-info col">
          <a class="brands-link" href="#">Nike</a>
          
         </div>
        </div>
        
      </div>
      <hr>
      <div class="container brands-container">
       <div class="row">
       <div class="brands">
          <span class="post-brands">2</span>
        </div>
       
         <div class="brands-info col">
          <a class="brands-link" href="#">Supreme</a>
          
         </div>
        </div>
        
      </div>
      <hr>
      <div class="container brands-container">
      <div class="row">
      <div class="brands">
         <span class="post-brands">3</span>
       </div>
      
        <div class="brands-info col">
         <a class="brands-link" href="#">Adidas</a>
         
        </div>
       </div>
       
     </div>
     <hr>
     <div class="container brands-container">
       <div class="row">
       <div class="brands">
          <span class="post-brands">4</span>
        </div>
       
         <div class="brands-info col">
          <a class="brands-link" href="#">North Face</a>
          
         </div>
        </div>
        
      </div>
      <hr>
      <div class="container brands-container">
       <div class="row">
       <div class="brands">
          <span class="post-brands">5</span>
        </div>
       
         <div class="brands-info col">
          <a class="brands-link" href="#">Pumas</a>
          
         </div>
        </div>
        
      </div>
      <hr> 
    </div>
  </div>
  
  `;

  return template;
};

export default Ranking;
