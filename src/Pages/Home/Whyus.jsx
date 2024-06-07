import { RiGuideLine } from "react-icons/ri";
import { ImHappy } from "react-icons/im";
import { GiHelicopter } from "react-icons/gi";

function Whyus() {
  return (
    <div className="Whyus">
      <div className="whyuscard">
        <div className="whyuscardTop">
          <div>
            <RiGuideLine />
          </div>
          <h2>01</h2>
        </div>
        <div className="whyuscardBottom">
          <h1>Expert Local Guides:</h1>
          <p>
            At Zaph Tours, we pride ourselves on our team of knowledgeable and
            passionate local guides. They bring each destination to life with
            insider tips, fascinating historical facts, and unique cultural
            insights that you won't find in guidebooks.
          </p>
        </div>
      </div>

      <div className="whyuscard">
        <div className="whyuscardTop">
          <div>
            <ImHappy />
          </div>
          <h2>02</h2>
        </div>
        <div className="whyuscardBottom">
          <h1>High Customer Satisfaction:</h1>
          <p>
            Our top priority is your satisfaction. We consistently receive
            excellent feedback from our clients, many of whom choose to travel
            with us again. Our dedicated team is always available to address
            your needs and ensure you have an unforgettable journey with Zaph
            Tours.
          </p>
        </div>
      </div>

      <div className="whyuscard">
        <div className="whyuscardTop">
          <div>
            <GiHelicopter />
          </div>
          <h2>03</h2>
        </div>
        <div className="whyuscardBottom">
          <h1>Seamless Travel:</h1>
          <p>
            From the moment you book with Zaph Tours, we take care of every
            detail. Our comprehensive service includes transportation,
            accommodation, and activities, allowing you to enjoy a hassle-free
            and seamless travel experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
