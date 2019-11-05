import React from 'react';
import PropTypes from 'prop-types';

const Character  = ({ character }) => {
  return (
    <div>
      <img src={character.photoUrl}/>
      <span>{character.name}</span>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;