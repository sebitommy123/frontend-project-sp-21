import './navbar.css';

import facebookLogo from '../img/facebook-logo.png';
import frykeaLogo from '../img/frykea-logo.png';
import instagramLogo from '../img/instagram-logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={frykeaLogo}></img>
        </Link>
      </div>
      <div className="info">
        <div className="top">
          <div className="grayedOut">Mon-Mon: </div>
          <div>9:00:000 AM - 173:0</div>
        </div>
        <div className="bottom">
          <div className="bottomText">Call Us: 000-Never</div>
          <img src={facebookLogo}></img>
          <img src={instagramLogo}></img>
        </div>
      </div>
    </div>
  )

}
