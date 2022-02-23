import React from 'react';

function MainNavigation() {
  return (
    <nav class="navbar navbar-light bg-light fixed-top">
      <div class="container-fluid">
        {/* <a class="navbar-brand" alt="sdsd" href="">
          Offcanvas navbar
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                {/* <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => console.log('test')}
                > */}
                Home
                {/* </a> */}
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#"> */}
                Link
                {/* </a> */}
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
