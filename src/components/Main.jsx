import CardsComics from "./elmMain/CardsComics";
import Button from "./elmMain/Button";
import Badge from "./elmMain/Badge";
import SectionBackground from "./elmMain/SectionBackground";

export default function Main() {
  return (
    <main>
      <SectionBackground type="first-section" />
      <section className="second-section">
        <div className="container">
          <div className="badge-menu">
            <Badge name="Current Series" type="badge" />
          </div>
          <CardsComics />
          <div className="button">
            <Button className="btn-primary">Load More</Button>
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="./image/buy-comics-digital-comics.png" alt="DG" />
              <h3>Digital Comics</h3>
            </div>
            <div className="col">
              <img src="./image/buy-comics-merchandise.png" alt="merchendise" />
              <h3>Dc Merchendise</h3>
            </div>
            <div className="col">
              <img
                src="./image/buy-comics-subscriptions.png"
                alt="subscription"
              />
              <h3>Subscription</h3>
            </div>
            <div className="col">
              <img src="./image/buy-comics-shop-locator.png" alt="locator" />
              <h3>Comic Shop Locator</h3>
            </div>
            <div className="col">
              <img src="./image/buy-dc-power-visa.svg" alt="power" />
              <h3>Dc Power Visa</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
