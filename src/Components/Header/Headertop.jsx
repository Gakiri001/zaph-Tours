import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Header.css"
function Headertop() {
  return (
    <div className="Headertop">
      <div className="HeadertopLeft">
        <ul>
          <li>Tours</li>
          <li>Gallery</li>
          <li>Explore</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="HeadertopRight">
        <ul>
          <li>Log In</li>
          <li>Sign up</li>
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default Headertop