import { useState } from "react";
import hamMenuImg from "../Images/hamMenu.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="Nav">
        <div className="Name">
          <h1>Luxor-Watches</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Watches</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <img src={hamMenuImg} alt="" />
            </button>
          </ul>
        </div>
      </div>
      <div className="hamMenu">
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Watches</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
