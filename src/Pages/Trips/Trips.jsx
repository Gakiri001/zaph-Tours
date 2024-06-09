import React from "react";
import trips from "../../data/trips";
import "./Trips.css";
import { Link } from "react-router-dom";

const Tripscard = ({
  title,
  description,
  price,
  highlights,
  highlight2,
  itinerary,
  pic,
  pic2,
}) => {
  return (
    <div className="Tripscard">
      <h1>{title}</h1>
      <div className="TripscardWrapper">
        <div className="TripscardP1">
          <img src={pic} alt="" />
        </div>
        <div className="TripscardP2">
          <div className="TripscardP2Top">
            <p>{description}</p>
          </div>
          <div className="TripscardP2Btm">
            <div className="TripscardP2BtmHigh">
              <h3>Highlights</h3>
              <ul>
                <li>{highlights}</li>
                <li>{highlight2}</li>
              </ul>
            </div>
            <div className="TripscardP2BtmActi">
              <h3>Activities</h3>
              <p>{itinerary}</p>
            </div>
          </div>
        </div>
        <div className="TripscardP3">
          <img src={pic2} alt="" />
          <h2>{price}</h2>
        </div>
      </div>
      <div className="TripscardBook">
        <Link className="book">Reserve Your Spot</Link>
      </div>
    </div>
  );
};

function Trips() {
  return (
    <div className="Trips">
      <div className="header"> <h1>Trips</h1></div>
      <div className="TripsWrapper">
        {trips.map((current, i) => (
          <Tripscard
            key={i}
            title={current.title}
            description={current.description}
            price={current.price}
            highlights={current.highlights}
            highlight2={current.highlight2}
            itinerary={current.itinerary}
            pic={current.pic}
            pic2={current.pic2}
          />
        ))}
      </div>
    </div>
  );
}

export default Trips;
