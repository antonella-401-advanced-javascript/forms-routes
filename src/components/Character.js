import React from 'react';
import PropTypes from 'prop-types';

const Character  = ({ character }) => {
  return (
    <div>
      <img src={character.photoUrl}/>
      <p>{character.name}</p>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object
};

export default Character;