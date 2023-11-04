import "./Popular.css";
import RoyalOak from "../Images/Royal Oak black ceramic.png";
import RoyalRepeater from "../Images/RoyalRepeeater.png";
import Tourbillion from "../Images/tourbillon.png";

function Popular() {
  return (
    <>
      <div className="container2">
        <div className="watches-section-header">
          <div className="popular">
            <h3>Collections</h3>
          </div>
          <div className="btns">
            <button>Royal Oak</button>
            <button>Sport Luxury</button>
          </div>
        </div>

        <div className="display">
          <div className="case">
            <img src={RoyalOak} alt="" />
            <h2>Royal Oak</h2>
            <h3>Minute Repeater Supersonnerie</h3>
            <p>42mm, Black cermaic</p>
          </div>
          <div className="case">
            <img src={RoyalRepeater} alt="" />
            <h2>Royal Oak</h2>
            <h3>Minute Repeater Supersonnerie</h3>
            <p>42mm, Titanium</p>
          </div>
          <div className="case">
            <img src={Tourbillion} alt="" />
            <h2>Royal Oak</h2>
            <h3>Selfwinding Flying Tourbillion</h3>
            <p>41mm, 18-carat pink gold</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Popular;
