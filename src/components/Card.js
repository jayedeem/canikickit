import axios from "axios";

const Card = async () => {
    const res = await axios.get(
        "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=supreme&brand=nike"
      );
      const sneaker = res.data.results[0];
    const template = `
    <div class="container">
  <div class="row">
  <div class="col-sm-6 d-flex align-items-stretch">
    <div class="card card-img rounded-0">
    
    <div class="image">
    <img id="shoe-img" class="img-fluid"src=${sneaker.media.thumbUrl} alt="">
    </div>
    </div>

    </div>
    <div class ="col-sm-6 d-flex align-items-stretch ">
    <div class="card rounded-0 text-card">  
    <div class= "card-body">
 
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque quia quibusdam possimus. Pariatur in amet corporis illum totam fugit eaque accusamus atque veniam porro architecto, facere ipsum eius maxime!
Ducimus minus ipsa, facere  necessitatibus! ta laudantium dicta inventore, suscipit dolores dolore pariatur eligendi. Cum minima cumque accusamus at ducimus, ipsum fugiat?

</p>  
    </div>
      </div>
      </div>
    </div>
    </div>
     
    </div>
  </div>
</div>`;
    return template;
};

export default Card