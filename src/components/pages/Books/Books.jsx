import React from "react";
import "../Styles/books.css";
import Book from "./Book";
import { useState, useEffect } from "react";
import { bookIcons } from "../../data/landingPage";
import books from "../../data/books_data.json";
const Books = () => {
  useEffect(() => {
    // setBooks(books)
  }, []);

  return (
    <>
      <div className="container-fluid All">
        <div className="container cat"></div>

        <div className="container-fluid booksContainer">
          {books.map((e) => (
            <>
              <div className="container-fluid bookContainer">
                <Book {...e} key={e.id} bookIcons={bookIcons} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
