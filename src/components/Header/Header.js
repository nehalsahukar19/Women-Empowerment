import React from "react";
import logo from "../../images/logos/WITfivicon.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Header() {
    return (
        <div>
            <nav 
                className='navbar fixed-top navbar-expand-lg navbar-light'
                style={{ backgroundColor: ' #92a8d1 ', paddingLeft: '5px'}}
            >
                <a className='navbar-brand' href='/'>
                    <img
                        src={logo}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                        alt=''
                        loading='lazy'
                        style={{marginRight: '10px'}}
                    />
                    Women in Technology
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    style={{marginRight:'5px'}}
                >
                    <span className='navbar-toggler-icon' />
                </button>

        <div
          className="collapse navbar-collapse my-2 my-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <span className="fa fa-home fa-lg">&nbsp;</span>
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                color="black"
              >
                <span className="fa fa-graduation-cap fa-lg">&nbsp;</span>
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/organisation">
                  Organizations
                </a>
                <a className="dropdown-item" href="/scholarship">
                  Scholarships
                </a>
                {/* <a className="dropdown-item" href="/infographics">
                  Infographics
                </a> */}
                <a className="dropdown-item" href="/resources">
                  Study Resources
                </a>
                <a className="dropdown-item" href="/events">
                  Events/Programs
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/inspirations">
                <span className="fa fa-users fa-lg">&nbsp;</span>
                Inspirations
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                color="black"
              >
                <span className="fa fa-solid fa-book">&nbsp;</span>
                Guidance
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/After10th">
                  After 10th
                </a>
                <a className="dropdown-item" href="/After12th">
                  After 12th
                  
                </a>
                {/* <a className="dropdown-item" href="/infographics">
                  Infographics
                </a> */}
          
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/job">
                <span className="fa fa-solid fa-briefcase">&nbsp;</span>
                Job
              </a>
            </li>
            {/*  <DarkMode/>   */}
            {/* Some dummy code below to create space around Contribute Dropdown */}
            {/* <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li> */}
            {/* Dummy code ends */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
