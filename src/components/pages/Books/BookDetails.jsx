import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const BookDetails = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/books/${bookId}`).then((response) => {
      setBook([...book, response.data]);
    });
  }, []);

  return <>{book.map((e) => e.id)}</>;
};

export default BookDetails;
