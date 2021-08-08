import React, { useState, useEffect } from "react";
import { Col, Button, Card, Input, message } from "antd";
import Header from "./header";
import { login } from "../../redux/userData/actionCreator";
import { useDispatch } from "react-redux";

import { CardStyleWrapper } from "./style";
import axios from "axios";
import * as Constants from "../../constants";
import { useHistory } from "react-router-dom";

const Gallery = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const changeInput = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const postData = () => {
    setIsLoading(true);

    let data = {};

    const addUserEndPoint = `${Constants.API}users?${Constants.API_KEY}`;

    data = {
      name: state.name,
    };

    //return;
    setIsLoading(true);

    axios
      .post(addUserEndPoint, data)
      .then((result) => {
        console.log("check user", result);
        dispatch(login(data));
        history.push("/game");
      })
      .catch((error) => {
        //console.log('error',error);
      });
  };

  const checkAndProceed = (name) => {
    if (name === "") {
      message.error("Please enter your name");
    } else {
      postData();
    }
  };
  return (
    <>
      <CardStyleWrapper>
        <Card>
          <Header />
          <Col style={{ marginBottom: "20px" }}>
            <h3 style={{ padding: "20px 0px 10px 25px", color: "#C0C0C0" }}>
              Enter your name
            </h3>
            <Input
            style={{width:'80%',marginLeft:'20px'}}
              onChange={(e) => {
                changeInput(e, "name");
              }}
              value={state.name}
              name="fname"
              placeholder="Eg:Bejo"
            />
          </Col>

          <Button
            style={{marginLeft:'20px'}}
            type="primary"
            onClick={(e) => {
              checkAndProceed(state.name);
            }}
            size="large"
          >
            Click here to start
          </Button>
        </Card>
      </CardStyleWrapper>
    </>
  );
};

export default Gallery;
