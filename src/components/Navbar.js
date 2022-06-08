import React from 'react';
import '../App.css';
const Navbar = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container p-3">
              <a class="navbar-brand h1 logo-style" href="#">ContigoPE</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href='https://www.adidas.pe/'>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href='https://www.adidas.pe/'>Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href='https://www.adidas.pe/'>Nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href='https://www.adidas.pe/'>¿Que somos?</a>
                  </li>
                </ul>
                <div>
                  <button class='m-2 btn btn-outline-primary'><i class="bi bi-person-lines-fill"> Registrar</i></button>
                  <button class="m-2 btn btn-outline-danger" type="submit"><i class="bi bi-person-circle"> Ingresar</i></button>
                  <button class="m-2 btn btn-outline-success" type="submit"><i class="bi bi-cart-plus"> Comprar</i></button>
                </div>
  
                
              </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;