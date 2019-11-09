import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character  = ({ character }) => {
  return (
    <div className={styles.Character}>
      <div>
        <img src={character.photoUrl}/>
      </div>
      <p>{character.name}</p>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object
};

export default Character;