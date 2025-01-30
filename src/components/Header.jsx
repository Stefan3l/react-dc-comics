import navElements from "./navHeader/navElements";
import MapListItems from "./mapListItems";

export default function Header() {
  return (
    <header>
      <section className="section-nav-header">
        <div className="container">
          <div className="header-nav">
            <div className="logo-header">
              <img src="./image/dc-logo.png" alt="logo" />
            </div>
            <div className="menu-header">
              <MapListItems items={navElements} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-header-second"></section>
    </header>
  );
}
