import React from "react";
import "../Styles/header.css";
import Container from "react-bootstrap/Container";

const HeaderIndex = () => {
  return (
    <>
      <Container fluid className="headerImgContainer">
        <img src="Images/headerImg.jpg" alt="" className="headerImg" />
      </Container>
    </>
  );
};

export default HeaderIndex;
