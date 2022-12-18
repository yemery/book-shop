import React from "react";
import "../Styles/book.css";
import { navBarIconLinks, bookIcons } from "../../data/landingPage";
import { Link } from "react-router-dom";
const Book = ({ id, image, title, price }) => {
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
              <span>{price}$</span>
            </div>
            <div className="bookIcons">
              {bookIcons.map((e) => {
                return (
                  <>
                    {e.id !== 4 ? (
                      <a href={e.path} key={e.id}>
                        {" "}
                        <img src={e.src} alt={e.id} className="iconImg" />
                      </a>
                    ) : (
                      <>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          {" "}
                          <img src={e.src} alt={e.id} className="iconImg" />
                        </button>
                        <div
                          class="modal fade modal-transition"
                          id="staticBackdrop"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabindex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <img src={image} alt="" />

                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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
