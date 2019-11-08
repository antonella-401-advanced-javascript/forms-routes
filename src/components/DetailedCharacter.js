import React from 'react';
import PropTypes from 'prop-types';

const DetailedCharacter  = ({ character }) => {
  return (
    <div>
      <img src={character.photoUrl}/>
      <p>{character.name}</p>
      <p>Gender: {character.gender}</p>
      <p>Hair Color: {character.hair}</p>
      <p>Weapon/Attack: {character.weapon}</p>
      <p>Affiliation: {character.affiliation}</p>
    </div>
  );
};

DetailedCharacter.propTypes = {
  character: PropTypes.object
};

export default DetailedCharacter;