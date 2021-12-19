import React from 'react';
import logo from '../../../images/logo_02_1x.png'

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

        <img className="" src={logo} alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kids</a>
        </li>
        
        
        
      </ul>
      <i class=" fs-4 me-2 fas fa-search"></i>
      <i class="me-2  fs-4 fas fa-shopping-cart"></i>
      <i class=" fs-4 fas fa-sign-in-alt"></i>
    </div>
  </div>
</nav>
    );
};

export default Navigation;