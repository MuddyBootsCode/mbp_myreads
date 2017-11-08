import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfChanger: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return (
                                <Book key={book.id} book={book} shelfChanger={this.shelfChanger}/>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf