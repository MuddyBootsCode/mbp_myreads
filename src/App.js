import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import StoreFront from './components/StoreFront'
import * as BooksAPI from './BooksAPI'

class App extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }



  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
            <StoreFront books={this.state.books}/>
        )}/>
      </div>
    );
  }
}

export default App;
