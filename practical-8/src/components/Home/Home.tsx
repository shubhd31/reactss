import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Home = () => {
  const Practicals = useSelector((state: RootState) => state.practicals);
  const listItems = Practicals.map((Practical, index) => (
    <div className="m-2" key={index}>
      <Card className="homecard" style={{ width: "18rem" }}>
        <Card.Img
          className="pt-2"
          variant="top"
          src={Practical.image}
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Card.Title>
            <b>{Practical.title}</b>
          </Card.Title>
          <Card.Text>
            <small>{Practical.description}</small>
          </Card.Text>
          <a href={Practical.demoLink} className="btn btn-outline-info btn-sm">
            Demo Link
          </a>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div
      className="d-flex mt-5 container shadow-lg"
      style={{ overflowX: "scroll", width: "930px" }}
    >
      {listItems}
    </div>
  );
};

export default Home;
