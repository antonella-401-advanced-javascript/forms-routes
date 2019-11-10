import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCharacter from '../../services/avatarApi';
import Characters from './CharacterList';
import Form from './Form';
import styles from './List.css';

export default class List extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    data: [],
    name: this.props.history.location.pathname.replace(/.*\/(.*?)/, '')
  };

  getList = () => {
    return getCharacter(`/api/v1/characters?name=${this.state.name}`)
      .then(data => this.setState({ data: data }));
  }

  componentDidMount() {
    this.getList();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.name}`);
    this.getList();
  }

  handleChange = ({ target }) => {
    event.preventDefault();
    this.setState({ name: target.value });
  }

  render() {
    const { data, name } = this.state;
    return (
      <>
        <div className={styles.List}>
          <h1>List</h1>
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={name}
          />
          <Characters characters={data}/>
        </div>
      </>
  
    );
  }
}


List.propTypes = {
  name: PropTypes.string
};