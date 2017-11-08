import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfChanger: PropTypes.func.isRequired
    }

    render() {

        const { books, shelfChanger, shelf } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <Book key={book.id} book={book} shelfChanger={shelfChanger}/>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf