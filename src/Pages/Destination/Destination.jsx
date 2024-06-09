import React from "react";
import { Link } from "react-router-dom";
import destination from "../../data/destination";
import { ImHappy } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { BsBrowserSafari } from "react-icons/bs";
import "./Destination.css";

const Destinationcard = ({
  image,
  image2,
  guide,
  visitorsAnnually,
  funRate,
  name,
  Description,
  priceGroup,
  priceIndividual,
  guidename,
}) => {
  return (
    <div className="destinationcard">
      <div className="destinationcardLeft">
        <div className="destinationcardLeftTop">
          <h1>{name}</h1>
        </div>
        <div className="destinationcardLeftBtm">
          <div className="cardBtmleftleft">
            <p>{Description}</p>
            <h3>
              Visitors Annually: <span>{visitorsAnnually}</span>
            </h3>
            <h3>
              Fun Rate: <span>{funRate}</span>
            </h3>
            <p>
              Rating : <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
          <div className="cardBtmleftRight">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="destinationcardRight">
        <div className="destinationcardRightTop">
          <img src={image2} alt="" />
          <div className="prices">
            <h2>
              {priceGroup} <sub>price per group</sub>
            </h2>
            <h2>
              {priceIndividual} <sub>price per individual</sub>
            </h2>
          </div>
        </div>

        <div className="btns">
          <Link className="book">Book Now</Link>
          <Link className="learn">Learn More</Link>
        </div>

        <div className="guideAndicons">
          <div className="guide">
            <img src={guide} alt="" />
            <p>{guidename}</p>
          </div>
          <div className="icons">
            {" "}
            <span>
              <BsBrowserSafari />
            </span>{" "}
            <span>
              <ImHappy />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Destination() {
  return (
    <React.Fragment>
      <div className="Destination">
        <div className="header">
          <h1>Destination</h1>
        </div>
        <div className="DestinationWrapper">
          {destination.map((current, i) => (
            <Destinationcard
              key={i}
              image={current.image}
              image2={current.image2}
              guide={current.guide}
              name={current.name}
              visitorsAnnually={current.visitorsAnnually}
              funRate={current.funRate}
              guidename={current.guidename}
              Description={current.Description}
              priceGroup={current.priceGroup}
              priceIndividual={current.priceIndividual}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Destination;
