import React from "react";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import "./Home.css";

function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="NewsletterWrapper">
        <div className="color"></div>
        <div className="NewsletterTop">
          <h1>Stay In Touch</h1>
          <p>Subscribe to our newsletter to get latest offers and discounts</p>
        </div>
        <div className="NewsletterBottom">
          <input type="text" placeholder="Enter your Emall Address" />
          <Link className="Subscribebtn">
            {" "}
            <span className="spanicon">
              <MdMessage />
            </span>{" "}
            <span className="spanname">Subscribe</span>
          </Link>
        </div>
        <div className="color1"></div>
      </div>
    </div>
  );
}

export default Newsletter;
