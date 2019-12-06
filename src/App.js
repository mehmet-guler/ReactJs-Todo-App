import React, { Component } from 'react';
import './App.css';

import List from './list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  onChange = (e) => {
    this.setState({
      term: e.target.value
      //e.target.elements.name.value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  deleteItem = e => {
    this.state.items.splice(0, 1);
  }

  render() {
    console.log("term", this.state.term);
    console.log("items", this.state.items)
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default App;