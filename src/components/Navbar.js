const Navbar = () => {
	const template = `
  <div class="container">
      <nav class="navbar navbar-expand-sm fixed-top navbar-dark ">
        <h1><a class="navbar-brand" href="/">SCUFFEDBEAST</a></h1>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon navbar-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >HOME <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FASHION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SNEAKERS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FOOD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ART</a>
            </li>
          </ul>
        </div>
        
    </div>
  `;

	return template;
};

export default Navbar;
