import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ logo, links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 navbar-gradient"> {/* Updated class for gradient background */}
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((linkItem, index) => (
              <li className="nav-item mx-3" key={index}> {/* Add margin for space */}
                <a className="nav-link" href={linkItem.link}>
                  {linkItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
