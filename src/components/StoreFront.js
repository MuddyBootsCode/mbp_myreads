import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class StoreFront extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfChanger: PropTypes.func.isRequired
    }

    render () {

        const { books, shelfChanger } = this.props

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                    <div className="list-books-content">
                        <BookShelf books={books.filter(book => book.shelf === "currentlyReading")} shelf={'Currently Reading'} shelfChanger={shelfChanger}/>
                        <BookShelf books={books.filter(book => book.shelf === "wantToRead")} shelf={'Want to Read'} shelfChanger={shelfChanger}/>
                        <BookShelf books={books.filter(book => book.shelf === "read")} shelf={'Read'} shelfChanger={shelfChanger}/>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
            </div>

        )

}
}

export default StoreFront