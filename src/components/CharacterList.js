import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link, withRouter } from 'react-router-dom';

const Characters = ({ characters }) => {
  const list = characters.map((character) => {
    return (
      <li key={character._id}>
        <Link to={`/details/${character._id}`}><Character character={character}/></Link>
      </li>
    );
  });

  return (
    <ul>
      {list}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.array
};

export default withRouter(Characters);