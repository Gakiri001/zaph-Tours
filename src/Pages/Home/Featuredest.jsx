import React from "react";
import featuredDestination from "../../data/featuredest"
import { Link } from "react-router-dom"
import "./Home.css"

const Destination = ({image,place,description,priceadult,pricechild}) =>{
  return(
    <section className="Destinationcard">
      <div>
        <img src={image} alt="" />
        <div className="color"></div>
      </div>
      <div className="destinationDetails">
        <h1>{place}</h1>
        <p className="description">{description}</p>
        <div className="prices">
          <p>{priceadult}</p>
          <Link className="book">Book Now</Link>
          <p>{pricechild}</p>
        </div>
      </div>
      <div>
      <div className="color1"></div>
        <img src={image} alt="" />
      </div>
    </section>
  )
}
function Featuredest() {
  return (
    <React.Fragment>
      <section className="Featuredest">
        <h1>Featured destinations</h1>
        <section className="Featuredestwrapper">
          {featuredDestination.map((currentdest,i) => (
            <Destination
            key={i}
            image={currentdest.image}
            place={currentdest.place}
            description={currentdest.description}
            priceadult={currentdest.priceadult}
            pricechild={currentdest.pricechild}
            />
          ))}
        </section>
      </section>
    </React.Fragment>
  )
}

export default Featuredest