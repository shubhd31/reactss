import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useResolvedPath } from "react-router-dom";
import { RootState } from "../../app/store";
import { Carousel } from "@trendyol-js/react-carousel";
import "./Home.css";

const Home = () => {
  const Practicals = useSelector((state: RootState) => state.practicals);
  const listItems = Practicals.map((Practical) => (
    <div className="m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={Practical.image}
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Card.Title>{Practical.title}</Card.Title>
          <Card.Text>{Practical.description}</Card.Text>
          <Button variant="primary">
            <a href={Practical.demoLink}></a>Demo Link
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div className="d-flex mt-5 container" style={{ overflowX: "scroll" }}>
      {listItems}
    </div>
  );
};

export default Home;
