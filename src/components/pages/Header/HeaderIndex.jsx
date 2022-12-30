import React, { useRef, useEffect, useState } from "react";
import "../Styles/header.css";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderIndex = () => {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    console.log(focus);
  }, [focus]);

  return (
    <>
      <div className="div headerContainer">
        <div className="conatiner-fluid headerImg">
          {/* <img src="Images/headerImg.jpg" alt="" className="headerImg" /> */}
        </div>
        <div className="container about">
          <p>
            <span>Welcome to our book store!</span> <br />
            We are dedicated to bringing you the best selection of books at
            affordable prices. Whether you're looking for the latest
            bestsellers, classic novels, or educational textbooks, we have
            something for everyone. Our store is filled with a wide range of
            genres, including fiction, non-fiction, children's books, and more.
            We are constantly updating our inventory with new releases and
            popular titles, so there's always something new to discover. Our
            friendly and knowledgeable staff is always happy to help you find
            the perfect book or make recommendations based on your interests.
          </p>
        </div>
        <div className="searchBarContainer">
          <div>
            <input
              type="text"
              placeholder="Search any book ..."
              className="search-bar"
              onClick={() => setFocus(true)}
            ></input>
            <button
              type="submit"
              className="search-button"
              style={{ display: focus ? "block" : "none" }}
            >
              <i className="fas fa-search">
                <AiOutlineSearch size={30} />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderIndex;
