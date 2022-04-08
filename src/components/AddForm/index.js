import React, { useState } from "react";
import "./style.css";

export const AddForm = ({ onAddNewBook }) => {

    const [book, setBook] = useState(() => ({
        isRead: false,
        description: "",
        title: "",
    }));

    return (
        <form
            className="book-form"
            onSubmit={(e) => {
                e.preventDefault();
                if (book.title.length) {
                    onAddNewBook(book);
                    setBook(() => ({
                        isRead: false,
                        description: "",
                        title: "",
                    }));
                }
            }}
        >
            <input
                type="text"
                className="book-input"
                placeholder="Title of book"
                value={book.title}
                onChange={(e) => {
                    setBook((prev) => ({ ...prev, title: e.target.value }));
                }}
            />

            <button className="book-button" type="submit">Add book</button>
            <br></br>
            <input
                type="text"
                className="description-input"
                placeholder="Description of book"
                value={book.description}
                onChange={(e) => {
                    setBook((prev) => ({ ...prev, description: e.target.value }));
                }}
            />
        </form>
    )
}