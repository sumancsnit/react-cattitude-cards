import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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

  handleChange = (e) => {
    console.log('App -> handleChange -> e', e);
    this.setState({ serachInput: e.target.value });
  };

  render() {
    const { cats, serachInput } = this.state;
    const filteredcats = cats.filter((cat) =>
      cat.name.toLowerCase().includes(serachInput.toLowerCase())
    );
    return (
      <div className='App'>
        <h1 className='heading'>Cattitude Cards</h1>
        <SearchBox
          placeholder='Search cats...'
          handleChange={this.handleChange}
        />
        <CardList cats={filteredcats}></CardList>
      </div>
    );
  }
}
