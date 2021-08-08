import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Card, notification, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CardStyleWrapper } from "./style";
import backcard from "../../static/images/backcard.jpg";
import cat from "../../static/images/cat.jpg";
import bomb from "../../static/images/bomb.jpg";
import defuse from "../../static/images/defuse.jpg";
import shuffle from "../../static/images/shuffle.jpg";
import { cardRemove, cardSet, logOut } from "../../redux/userData/actionCreator";

import * as Constants from "../../constants";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;

const AddEvent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { userName,cardData } = useSelector((state) => {
    return {
      userName: state.userReducer.userData.name,
      cardData:state.userReducer.cardData,
    };
  });

  console.log(userName,cardData);

  const [showLoseModal, setShowLoseModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showHighScoreModal, setShowHighScoreModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([
    { isTurned: false, number: 1 },
    { isTurned: false, number: 2 },
    { isTurned: false, number: 3 },
    { isTurned: false, number: 4 },
    { isTurned: false, number: 1 },
  ]);
  const [isRotated, setIsRotated] = useState(false);
  const [deffusers, setDeffusers] = useState([]);

  useEffect(() => {
    fetchUsers();
    if(cardData===null||cardData===undefined||cardData.length===0){
    setCards([
      { isTurned: false, number: Math.floor(Math.random() * 4) + 1 },
      { isTurned: false, number: Math.floor(Math.random() * 4) + 1 },
      { isTurned: false, number: Math.floor(Math.random() * 4) + 1 },
      { isTurned: false, number: Math.floor(Math.random() * 4) + 1 },
      { isTurned: false, number: Math.floor(Math.random() * 4) + 1 },
    ])}else{
setCards([...cardData])
    }
  }, []);

  useEffect(() => {
    if (cards.length === 0) {
      setShowSuccessModal(true);
    }
  }, [cards]);

  const SignOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    history.push("/");
  };

 
  const fetchUsers = () => {
    setIsLoading(true);

    let endpoint = `${Constants.API}users?${Constants.API_KEY}`;

    axios
      .get(endpoint)
      .then((result) => {
        let events = result.data.users;
        console.log("service", result.data);
        setUsers(events);

        setIsLoading(false);

        // console.log('axios', this.state);
      })
      .catch((error) => {
        setIsLoading(false);
        //console.log('error', error);
      });
  };

  const getImage = (number) => {
    let image = "";
    if (parseInt(number) === 1) {
      image = cat;
    } else if (parseInt(number) === 2) {
      image = bomb;
    } else if (parseInt(number) === 3) {
      image = defuse;
    } else if (parseInt(number) === 4) {
      image = shuffle;
    }

    return image;
  };

  const PostData = () => {
    setIsLoading(true);

    let data = {};

    const addEventEndPoint = `${Constants.API}users?${Constants.API_KEY}`;

    data = {
      name: userName,
    };

    //return;
    setIsLoading(true);

    axios
      .put(addEventEndPoint, data)
      .then((result) => {
        dispatch(cardRemove())
        window.location.reload();
      })
      .catch((error) => {
        //console.log('error',error);
      });
  };

  const onRotate = (index) => {
    let cardArray = cards;
    cardArray[index].isTurned = true;
    setCards([...cards]);
    checkLogic(cards[index].number, index);
    console.log(cards);
  };

  const checkLogic = (number, index) => {
    if (cards.length > 0) {
      if (parseInt(number) === 1) {
        let cardArray = cards;
        cardArray.splice(index, 1);
        dispatch(cardSet([...cardArray]))
        setTimeout(function () {
          setCards([...cardArray]);
         
        }, 800);
      } else if (parseInt(number) === 2) {
        if (deffusers.length === 0) {
          setShowLoseModal(true);
        } else {
          let cardArray = cards;
          cardArray.splice(index, 1);
          let deffuserArray = deffusers;
          deffuserArray.pop();
          setDeffusers([...deffuserArray]);
          dispatch(cardSet([...cardArray]))
          setTimeout(function () {
            setCards([...cardArray]);
          }, 800);
        }
      } else if (parseInt(number) === 3) {
        let cardArray = cards;
        cardArray.splice(index, 1);
        let deffuserArray = deffusers;
        deffuserArray.push("exist");
        setDeffusers([...deffuserArray]);
        dispatch(cardSet([...cardArray]))
        setTimeout(function () {
          setCards([...cardArray]);
        }, 800);
      } else if (parseInt(number) === 4) {
        dispatch(cardRemove())
        setTimeout(function () {
          window.location.reload();
        }, 800);
      }
    }
  };

  const closeHighScoreModal = () => {
    setShowHighScoreModal(false);
  };

  const handleOk = () => {
    dispatch(cardRemove())
    window.location.reload();
  };
  const handleSaveScore = () => {
    PostData();
    window.location.reload();
  };

  return (
    <>
      <CardStyleWrapper>
        <Modal
          type="primary"
          visible={showLoseModal}
          footer={null}
          onCancel={handleOk}
        >
          <div className="project-modal">
            <h1>You have lost the game</h1>
          </div>
        </Modal>
        <Modal
          type="primary"
          visible={showHighScoreModal}
          footer={null}
          onCancel={closeHighScoreModal}
        >
          <div className="project-modal">
            <h2>Score board</h2>
            {users.map((user, index) => {
              return (
                <Row>
                  <Col style={{ textAlign: "center" }} span={12}>
                    <h3>{user[0]}</h3>
                  </Col>
                  <Col style={{ textAlign: "center" }} span={12}>
                    <h3>{user[1]}</h3>
                  </Col>
                </Row>
              );
            })}
          </div>
        </Modal>

        <Modal
          type="primary"
          visible={showSuccessModal}
          footer={null}
          onCancel={handleSaveScore}
        >
          <div className="project-modal">
            <h1>You have Won the game</h1>
          </div>
        </Modal>
        <Row>
          <div style={{ padding: "0px 20px" }}>
            <h1>Hello {userName} , Welcome to the game of cards</h1>
          </div>
          <div style={{ marginTop: "7px", marginLeft: "12px" }}>
            <Button type="primary" onClick={(e) => setShowHighScoreModal(true)}>
              View score board
            </Button>

            <Button
              type="danger"
              style={{ marginLeft: "12px" }}
              onClick={SignOut}
            >
              log out
            </Button>
          </div>
        </Row>
        <Row>
          {cards.map((product, index) => {
            return (
              <Col xs={24} xxl={4} md={8} style={{ textAlign: "center" }}>
                <div className="card-container">
                  <div
                    className={`card ${product.isTurned ? "rotated" : ""}`}
                    onClick={(e) => onRotate(index)}
                  >
                    <div className="front">
                      <img
                        alt="example"
                        style={{ width: 250, height: 270 }}
                        src={backcard}
                      />
                    </div>
                    <div className="back">
                      <img
                        alt="example"
                        style={{ width: 250, height: 270 }}
                        src={getImage(product.number)}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </CardStyleWrapper>
    </>
  );
};

export default AddEvent;
