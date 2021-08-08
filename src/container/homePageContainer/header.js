import React, { useState, useEffect } from "react";
import { Col, Row, Progress } from "antd";
import { HeaderLeftColumn, HeaderRowStyle } from "./style";
const Gallery = (counts) => {
  const [state, setState] = useState({
    data: [],
    walletBalance: 0,
    activeClass: "",
    profilePicture: "",
    newProfilePicture: "",
    newWorkPicture: "",
    workPictures: [],
  });

  return (
    <>
      <HeaderRowStyle>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", paddingTop: "155px" }}>
            Welcome to the Game of cards
          </h1>
        </div>
      </HeaderRowStyle>
    </>
  );
};

export default Gallery;
