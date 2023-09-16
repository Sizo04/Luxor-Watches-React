import "./Hero.css";
import ap from "../Images/ap.png";
import patek from "../Images/patek.png";
import rolex from "../Images/rolex.png";
import tag from "../Images/TAG_Heuer_Logo.svg.png";
import vacheron from "../Images/vacheron.png";
import heroImg from "../Images/luxor rolex.png";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="text">
          <div className="text-container">
            <h4>Luxor Watches</h4>
            <h2>Luxury Time Piece</h2>
            <p>
              Welcome to Luxor Watches, your one-stop shop for luxury
              timepieces. We carry a wide selection of watches from the world's
              most renowned brands, including Rolex, Omega, Patek Philippe, and
              more. We also have a team of expert watchmakers who can help you
              find the perfect watch for your needs and budget.Whether you're
              looking for a classic dress watch, a sporty chronograph, or a
              diver's watch, we have the perfect watch for you. We also offer a
              variety of services, such as watch repair, customization, and
              watch storage.
            </p>

            <div className="brands">
              <button>
                <img src={ap} alt="" />
              </button>
              <button>
                <img src={patek} alt="" />
              </button>
              <button>
                <img src={rolex} alt="" />
              </button>
              <button>
                <img src={tag} alt="" />
              </button>
              <button>
                <img src={vacheron} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
}

export default Hero;
