import React from 'react'
import Book from './Book'

export default function BookShelf (props) {

        const { books, shelfChanger, shelf } = props

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

