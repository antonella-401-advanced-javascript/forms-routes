import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';


export default class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { handleSubmit, handleChange, name } = this.props;
    return (
      <form className={styles.Form} onSubmit={handleSubmit}>
        <input type="text" placeholder="character name" value={name} onChange={handleChange}></input>
        <button onClick={handleSubmit}>SEARCH</button>
      </form>
    );
  }

}
