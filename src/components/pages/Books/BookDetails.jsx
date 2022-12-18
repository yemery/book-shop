import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import books from "../../data/books_data";

const BookDetails = () => {
  const { bookId } = useParams();
  //   console.log(bookId);
  //   console.log(books);
  //   useEffect(() => {
  //     // console.log(typeof books);
  //     // console.log(typeof bookId);
  //     console.log(books.filter((e) => e.id === parseInt(bookId)));
  //     // setBook(books.filter((e) => e.id === bookId));
  //     // console.log(books.filter((e) => e.id === bookId).map((el) => el.price));
  //   }, []);
  //   console.log(book);

  return <>{bookId}</>;
};

export default BookDetails;
