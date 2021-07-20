import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

import '../../CSS/Game.css';

class Header extends Component {
  render() {
    const getLocalStorage = JSON.parse(localStorage.getItem('state'));
    const point = getLocalStorage.player.score;
    const { players, email } = this.props;
    const hashGenerator = md5(email).toString();
    return (
      <div className="header-config">
        <div className="player-style">
          <h3
            data-testid="header-player-name"
          >
            Bem-vindo,
            {' '}
            {players}
            !
          </h3>
          <img
            src={ `https://www.gravatar.com/avatar/${hashGenerator}` }
            alt="Gravatar"
            data-testid="header-profile-picture"
          />
        </div>
        <div data-testid="header-score">{ point }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.homeReducer.email,
  players: state.homeReducer.name,
});

Header.propTypes = {
  players: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
