import React from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';

const InfoLine = (props) => (
  <div className={styles.InfoLine}>
    <span>{props.lineHead}</span><p>{props.value}</p>
  </div>
);

InfoLine.propTypes = {
  lineHead: PropTypes.string,
  value: PropTypes.string
};

export default InfoLine;
