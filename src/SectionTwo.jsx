import React from 'react';
import PropTypes from 'prop-types';

function SectionTwo({ boxes }) {
  return (
    <section className="section-two">
      <div className="container">
        <div className="row">
          {boxes.map((box, index) => (
            <div key={index} className="col-md-3">
              <div className="box">
                <h2>{box.title}</h2>
                <p>{box.description}</p>
                <button className="btn btn-read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

SectionTwo.propTypes = {
  boxes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SectionTwo;
