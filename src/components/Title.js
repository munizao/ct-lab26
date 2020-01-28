import React from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';

const Title = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p>id: {props.id} -- created 2 years ago.</p>
  </div>
);

Title.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number 
};

export default Title;
