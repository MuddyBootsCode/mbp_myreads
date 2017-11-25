import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'



export default class BookSearch extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfChanger: PropTypes.func.isRequired,
        isBookOnShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchResults: []
    }

    updateQuery = query => {
        this.setState({query: query.trim()})
    }

    bookSearch = debounce((query) => {

        this.updateQuery(query)
        BooksAPI.search(query).then(
            searchResults => {
                if (!searchResults || searchResults.hasOwnProperty('error')){
                    this.setState({ searchResults: []})
                } else {
                    searchResults =  this.props.isBookOnShelf(this.props.books, searchResults)
                    this.setState({ searchResults })
                }
            }
        )
    }, 50)


    render() {

        const { query, searchResults } = this.state
        const { shelfChanger} = this.props

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
                        {searchResults && searchResults.map((book) => (
                            <Book key={book.id} book={book} shelfChanger={shelfChanger}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}
