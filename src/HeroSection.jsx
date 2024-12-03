import React from 'react';
import PropTypes from 'prop-types';

function HeroSection({ backgroundImage, heading, subheading, description, buttonText }) {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-left-center">
              <h5>{subheading}</h5>
              <h1 className="hero-heading" dangerouslySetInnerHTML={{ __html: heading }} />
              <p>{description}</p>
              <button className="btn btn-solid mt-3">{buttonText}</button> {/* Changed class to .btn-solid */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default HeroSection;
