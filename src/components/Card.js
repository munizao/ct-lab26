import React from 'react';
import PropTypes from 'prop-types';
import ImageBox from './ImageBox';
import CharacterInfo from './CharacterInfo';

const Card = () => (
  <div>
    <ImageBox id="132" name="Gar\'s Mytholog" />
    <CharacterInfo status="Alive" species="Human" gender="Female" origin="Earth" lastLocation="Mars"/>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number 
};

export default Card;

