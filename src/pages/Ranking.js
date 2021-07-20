import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Jogar Novamenteam
          </button>
        </Link>
      </div>
    );
  }
}
