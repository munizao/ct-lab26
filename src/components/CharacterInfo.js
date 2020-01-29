import React from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';
import InfoLine from './InfoLine';


const CharacterInfo = (props) => (
  <div className={styles.CharacterInfo}>
    <InfoLine lineHead="STATUS" value={props.status}/>
    <InfoLine lineHead="SPECIES" value={props.species}/>
    <InfoLine lineHead="GENDER" value={props.gender}/>
    <InfoLine lineHead="ORIGIN" value={props.origin}/>
    <InfoLine lineHead="LAST LOCATION" value={props.lastLocation}/>
  </div>
);

CharacterInfo.propTypes = {
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  lastLocation: PropTypes.string,
};

export default CharacterInfo;
