import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import StoreFront from './components/StoreFront'
import * as BooksAPI from './BooksAPI'
import BookSearch from "./components/BookSearch";

class App extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    shelfChanger = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            book.shelf = newShelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([ book ])
            }));
        });
    };

    isBookOnShelf = (books, searchResults) => {
        searchResults.forEach((searchResult) => {
            books.forEach((book) => {
                if (book.id === searchResult.id) {
                    searchResult.shelf = book.shelf;
                }
            })
        })
        return searchResults;
    }




    render() {
    return (

      <div className="App">
        <Route exact path="/" render={() => (
            <StoreFront books={this.state.books} shelfChanger={this.shelfChanger}/>
        )}/>
        <Route path="/search" render={({ history }) => (
            <BookSearch shelfChanger={this.shelfChanger} isBookOnShelf={this.isBookOnShelf} books={this.state.books}/>
        )}/>
      </div>
    );
  }
}

export default App;
