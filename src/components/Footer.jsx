import DcComics from "./elmFooter/DcComics";
import Shop from "./elmFooter/shop";
import Dc from "./elmFooter/Dc";
import Sites from "./elmFooter/sites";
import MapListItems from "./mapListItems";

export default function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <div className="row-footer">
            <div className="col-footer row-menu-footer">
              <div className="col-menu-footer">
                <h4>Dc Comics</h4>
                <MapListItems items={DcComics} />
                <h4>Shop</h4>
                <MapListItems items={Shop} />
              </div>
              <div className="col-menu-footer">
                <h4>DC</h4>
                <MapListItems items={Dc} />
              </div>
              <div className="col-menu-footer">
                <h4>Sites</h4>
                <MapListItems items={Sites} />
              </div>
            </div>
            <div className="col-footer img-container">
              <img
                className="overlay-image"
                src="./image/dc-logo-bg.png"
                alt="logo-footer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="nav-footer">
        <div className="container">
          <div className="row-footer-bar">
            <div className="col-bar-footer">
              <button>SIGN-UP NOW!</button>
            </div>
            <div className="col-bar-footer">
              <h2>Follow Us</h2>
              <img src="./image/footer-facebook.png" alt="facebook" />
              <img src="./image/footer-twitter.png" alt="facebook" />
              <img src="./image/footer-youtube.png" alt="facebook" />
              <img src="./image/footer-pinterest.png" alt="facebook" />
              <img src="./image/footer-periscope.png" alt="facebook" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
