import axios from "axios";
import "./AboutUs.css";
import * as React from "react";
import { FC } from "react";

const AboutUs: FC = () => {
  const [advise, setAdvise] = React.useState();
  React.useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        setAdvise(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app">
      <div className="card_abtus">
        <span className="heading">{advise}</span>
        <button className="buttonAdvice" onClick={fetchAdvice}>
          <span>Need any Help?</span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
