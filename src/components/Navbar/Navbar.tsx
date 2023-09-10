import "./Navbar.css";

function Navbar() {
  return (
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
