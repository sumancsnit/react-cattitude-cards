import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className='App'>
        <CardList monsters={monsters}>
          
        </CardList>
      </div>
    );
  }
}
