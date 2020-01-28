import React from 'react';
import PropTypes from 'prop-types';

const Character = (props) => (
  <>
    <div>
      <span>STATUS</span><p>{props.status}</p>
    </div>
    <div>
      <span>SPECIES</span><p>{props.species}</p>
    </div>
    <div>
      <span>GENDER</span><p>{props.gender}</p>
    </div>
    <div>
      <span>ORIGIN</span><p>{props.origin}</p>
    </div>
    <div>
      <span>LAST LOCATION</span><p>{props.lastLocation}</p>
    </div>
  </>
);

Character.propTypes = {
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  lastLocation: PropTypes.string,
};

export default Character;
