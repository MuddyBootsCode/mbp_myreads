import React from 'react'

function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book, index) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url("${book.imageLinks.thumbnail}")`
                                    }}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf