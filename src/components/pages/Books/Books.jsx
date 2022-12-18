import React from "react";
import "../Styles/books.css";
import Book from "./Book";
import { useState, useEffect } from "react";

import books from "../../data/books_data";

const Books = () => {
  // const [items, setItems] = useState(15);
  // const [objects, setObjects] = useState([]);

  return (
    <>
      <div className="container-fluid All">
        <div className="container cat"></div>

        <div className="container-fluid booksContainer">
          {books.map((e) => (
            <div className="container-fluid bookContainer">
              <Book {...e} key={e.id} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="container" >
        <button>
          <img
            src="Icons/arrow-thin-chevron-right-icon.svg"
            className="iconImg"
            alt=""
          />
        </button>
      </div> */}
    </>
  );
};

export default Books;
