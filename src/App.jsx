import React, { useState } from 'react';
import BOOKS from './store/books.json'
import { Books } from './components/Books'
import { AddForm } from './components/AddForm';
import { StatisticBoard } from './components/StatisticBoard';
import "./App.css"
//({ count, data: { id, isRead, title }, onRemoveBook, onSetReadBook })

const App = () => {

  const [bookList, setBookList] = useState(BOOKS);

  const onRemoveBook = (id) => {
    setBookList((prev) => prev.filter((book) => book.id !== id));
  }
  const onReadBook = (id) => {

    const idx = bookList.findIndex((item) => item.id === id);
    const newBook = { ...bookList[idx], isRead: !bookList[idx].isRead };
    setBookList(prev => ([...prev.slice(0, idx), newBook, ...prev.slice(idx + 1)]))
   

  }
  const onAddNewBook = (book) => {
    setBookList(prev => ([...prev, { ...book, id: bookList.length + 1 }]))
  }

  const statisticsData = {
    all: bookList.length,
    readBooks: bookList.filter((book) => book.isRead).length,
    notReadBooks: bookList.filter((book) => !book.isRead).length,
  };

  return (
    <div className="container"><div className="header">
      <h3>Book list</h3>
      
      <AddForm onAddNewBook={onAddNewBook} />
      
      <StatisticBoard {...statisticsData}
        onRemoveAll={() => setBookList([])}
      />
      </div>
      <Books books={bookList} onRemoveBook={onRemoveBook} onReadBook={onReadBook} />

    </div>
  );
};

export default App;
