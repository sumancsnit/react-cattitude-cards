import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Demogorgons',
        },
        {
          name: 'Demodogs',
        },
        {
          name: 'The Mind Flayer',
        },
        {
          name: 'The Vines',
        },
      ],
    };
  }
  render() {
    const { monsters } = this.state;
    return (
      <div className='App'>
        {monsters.map((monster) => (
          <h1>monster.name</h1>
        ))}
      </div>
    );
  }
}
