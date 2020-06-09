import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => this.setState({ cats: users }))
    );
  }

  render() {
    const { cats } = this.state;
    return (
      <div className='App'>
        <CardList cats={cats}></CardList>
      </div>
    );
  }
}
