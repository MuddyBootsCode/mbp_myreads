import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";


class BookSearch extends Component {

    state = {
        query: '',
        books: []
    }

    updateQuery = query => {
        this.setState({query: query.trim()})
    }

    clearQuery = query => {
        this.setState({query: ''})
    }

    bookSearch = (query) => {

        this.updateQuery(query)
        BooksAPI.search(query).then(
            books => {
                if (!books || books.hasOwnProperty('error')){
                    this.setState({ books: []})
                } else {
                    this.setState({ books })
                }
            }
        )
    }


    render() {

        const { query } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                         <input type="text"
                                autoFocus
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.bookSearch(event.target.value)}
                         />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books && this.state.books.map((book) => (
                            <Book key={book.id} book={book}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default BookSearch