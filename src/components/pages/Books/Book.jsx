import React from "react";
import "../Styles/book.css";
import { Link } from "react-router-dom";
const Book = ({ id, image, title, price, bookIcons }) => {
  return (
    <>
      <div className="card">
        <Link to={`/bookDetails/${id}`}>
          <img src={image} className="card-img-top bookImg" alt="..." />
        </Link>
        <div className="card-body">
          <div className="bookTitle">
            <Link to={`/bookDetails/${id}`} className="linkToBook">
              <p className="card-text">{title.substring(0, 40)}...</p>
            </Link>
          </div>

          <div className="otherInfos">
            <div className="div ">
              <span
                style={{
                  textDecoration: "line-through",
                  color: "gray",
                  marginRight: "7px",
                }}
              >
                12$
              </span>
              <span>{price.replace("US$", "")} $</span>
            </div>
            <div className="bookIcons">
              {bookIcons.map((e) => {
                return (
                  <>
                    <a href={e.path} key={e.id}>
                      {" "}
                      <img src={e.src} alt={e.id} className="iconImg" />
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
