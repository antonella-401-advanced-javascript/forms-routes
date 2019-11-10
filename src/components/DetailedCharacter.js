import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailedCharacter.css';

const DetailedCharacter  = ({ character }) => {
  return (
    <div className={styles.DetailedCharacter}>
      <div>
        <img src={character.photoUrl}/>
      </div>
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