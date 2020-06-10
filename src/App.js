import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      serachInput: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => this.setState({ cats: users }))
    );
  }

  render() {
    const { cats, serachInput } = this.state;
    const filteredcats = cats.filter((cat) => {
      console.log(cat.name.toLowerCase());
      return cat.name.toLowerCase().includes(serachInput.toLowerCase());
    });
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search cats...'
          onChange={(e) => {
            this.setState({ serachInput: e.target.value });
          }}
        />
        <CardList cats={filteredcats}></CardList>
      </div>
    );
  }
}
