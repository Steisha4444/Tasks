import React, {useState} from "react";
import "./style.css" ;

export const Book = ({ count, data: { id, isRead, title,description  }, onRemoveBook, onReadBook }) => {
    const titleStyle = `book-title ${isRead ? "isRead" : ""}`;

    return (

        <li className={titleStyle}>
            <span className="book-count">{count}</span>
            <span className="book-title">'{title}'</span>
            <br></br>
            <span className="book-description">{description}</span>
            <span className="row">
                <span className="pointer" onClick={() => onRemoveBook(id)}>✖</span>
                <input
                    type="checkbox"
                    className="pointer "
                    checked={isRead}
                    onChange={() => onReadBook(id)}
                />
            </span>
        </li>
    )
}