import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

const ImageBox = (props) => (
  <div>
    <div className="card-image">
      <img src= {'https://rickandmortyapi.com/api/character/avatar/' + props.id + '.jpeg'} alt={props.name} />
    </div>
    <Title id={props.id} name={props.name}/>
  </div>
);

ImageBox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

export default ImageBox;
