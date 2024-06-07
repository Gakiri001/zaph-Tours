import "./Home.css"
import { BiTrip } from "react-icons/bi";
import { GiLion } from "react-icons/gi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Hero">
      <div className="HeroLeft">
        <input type="text" placeholder="Seach for tour destination" />
        <h1>Zaph Tours</h1>
      </div>
      <div className="HeroRight">
        <h3>Explore the <span>world with us</span></h3>
        <ul>
          <li><Link className="HeroRightbtn"> <div><BiTrip/></div> <span>Explore the world</span></Link></li>
          <li><Link className="HeroRightbtn"><div><GiLion/></div> <span>Nature and wild</span></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero