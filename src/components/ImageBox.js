import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import Title from './Title';
import kittenImage from '../assets/kitten1.jpeg'

const ImageBox = (props) => (
  <div className={styles.ImageBox}>
    <div className="card-image">
      <img src={kittenImage} alt={props.name} />
    </div>
    <Title id={props.id} name={props.name}/>
  </div>
);

ImageBox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

export default ImageBox;
