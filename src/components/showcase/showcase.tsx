import "./showcase.css";
import APWatch from "../Images/APWatch.png";
import Patek from "../Images/patek philippe2.png";
import Rolex from "../Images/roli.png";
import Tag from "../Images/tag.png";
import Vacheron from "../Images/vacheronw.png";

function Showcase() {
  return (
    <>
      <div className="showcases">
        <div className="showcase">
          <div className="container">
            <div className="image">
              <img src={APWatch} alt="" />
            </div>
            <div className="text">
              <h1>Audemars Piguet</h1>
              <h3>To Break the Rules, You Must First Master Them</h3>
              <p>
                Audemars Piguet Holding SA is a Swiss manufacturer of luxury
                watches and clocks, headquartered in Le Brassus, Switzerland.
                The company was founded by Jules Louis Audemars and Edward
                Auguste Piguet in the Vallée de Joux in 1875, acquiring the name
                Audemars Piguet & Cie in 1881.
              </p>
            </div>
          </div>
        </div>
        <div className="showcase2">
          <div className="container">
            <div className="image">
              <img src={Patek} alt="" />
            </div>
            <div className="text">
              <h1>Patek Philippe</h1>
              <h3>You never actually own a Patek Philippe</h3>
              <p>
                Patek Philippe SA is a Swiss luxury watch and clock
                manufacturer, located in the Canton of Geneva and the Vallée de
                Joux. Established in 1839, it is named after two of its
                founders, Antoni Patek and Adrien Philippe.
              </p>
            </div>
          </div>
        </div>
        <div className="showcase">
          <div className="container">
            <div className="image">
              <img src={Rolex} alt="" />
            </div>
            <div className="text">
              <h1>Rolex</h1>
              <h3>Rolex – left for greatness. Rolex proves dependable.</h3>
              <p>
                Rolex SA is a Swiss watch designer and manufacturer based in
                Geneva, Switzerland. Founded in 1905 as Wilsdorf and Davis by
                Hans Wilsdorf and Alfred Davis in London, the company registered
                Rolex as the brand name of its watches in 1908 and became Rolex
                Watch Co.
              </p>
            </div>
          </div>
        </div>
        <div className="showcase2">
          <div className="container">
            <div className="image">
              <img src={Tag} alt="" />
            </div>
            <div className="text">
              <h1>Tag Heuer</h1>
              <h3>Don't Crack Under Pressure</h3>
              <p>
                TAG Heuer S.A. is a Swiss luxury watchmaker that designs,
                manufactures and markets watches and fashion accessories, as
                well as eyewear and mobile phones manufactured under license by
                other companies and carrying the TAG Heuer brand name.
              </p>
            </div>
          </div>
        </div>
        <div className="showcase">
          <div className="container">
            <div className="image">
              <img src={Vacheron} alt="" />
            </div>
            <div className="text">
              <h1>Vacheron Constantin</h1>
              <h3>Do better if possible, and that is always possible</h3>
              <p>
                Vacheron Constantin SA is a Swiss luxury watch and clock
                manufacturer founded in 1755. Since 1996, it has been a
                subsidiary of the Swiss Richemont Group. Vacheron Constantin is
                one of the oldest watch manufacturers in the world with an
                uninterrupted watchmaking history since its foundation in 1755.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
