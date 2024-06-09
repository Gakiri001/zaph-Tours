import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Headerbottom() {
  return (
    <div className="Headerbottom">
      <div className="Headerbottomleft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderbottomRight">
        <ul>
          <li>
            <Link className="HeaderLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Destination">
              Destination
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Trips">
              Trips
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headerbottom;
