import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCharacter from '../../services/avatarApi';
import DetailedCharacter from './DetailedCharacter';
import styles from './Detail.css';

export default class Detail extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    character: {},
    id: this.props.history.location.pathname.replace(/.*\/(.*?)/, '')
  }

  componentDidMount() {
    return getCharacter(`/api/v1/characters/${this.state.id}`)
      .then(data => this.setState({ character: data }));
  }

  render() {

    return (
      <>
        <div className={styles.Detail}>
          <DetailedCharacter character={this.state.character} />
        </div>
      </>
    );
  }
}