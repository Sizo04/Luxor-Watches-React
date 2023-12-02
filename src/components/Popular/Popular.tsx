import "./Popular.css";
import RoyalOak from "../Images/Royal Oak black ceramic.png";
import RoyalRepeater from "../Images/RoyalRepeeater.png";
import RoyalRepeater2 from "../Images/minute repeater.png";
import Tourbillion from "../Images/tourbillon.png";
import Tourbillion2 from "../Images/tourbillion2.png";
import Tourbillion3 from "../Images/tourbillion3.png";

import React, { useState } from "react";

function Popular() {
  const [displayA, setDisplayA] = useState(true);

  const handleBtnAClick = () => {
    setDisplayA(true);
  };

  const handleBtnBClick = () => {
    setDisplayA(false);
  };

  return (
    <>
      <div className="container2">
        <div className="watches-section-header">
          <div className="popular">
            <h3>Royal Oak Pieces</h3>
          </div>
          <div className="btns">
            <button id="btna" onClick={handleBtnAClick}>
              Minute Repeater
            </button>
            <button id="btnb" onClick={handleBtnBClick}>
              Flying Turbillion
            </button>
          </div>
        </div>

        <div id="a" className={displayA ? "display" : "hidden"}>
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
            <img src={RoyalRepeater2} alt="" />
            <h2>Royal Oak</h2>
            <h3>Selfwinding Flying Tourbillion</h3>
            <p>41mm, 18-carat pink gold</p>
          </div>
        </div>

        <div id="hidden" className={displayA ? "hidden" : "display"}>
          <div className="case">
            <img src={Tourbillion} alt="" />
            <h2>Royal Oak</h2>
            <h3>Minute Repeater Supersonnerie</h3>
            <p>42mm, Black cermaic</p>
          </div>
          <div className="case">
            <img src={Tourbillion2} alt="" />
            <h2>Royal Oak</h2>
            <h3>Minute Repeater Supersonnerie</h3>
            <p>42mm, Titanium</p>
          </div>
          <div className="case">
            <img src={Tourbillion3} alt="" />
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
