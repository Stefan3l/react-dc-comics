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
              <ul>
                <li>
                  <a href="#">Characters</a>
                </li>
                <li>
                  <a className="active" href="#">
                    Comics
                  </a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Games</a>
                </li>
                <li>
                  <a href="#">Collectibles</a>
                </li>
                <li>
                  <a href="#">Videos</a>
                </li>
                <li>
                  <a href="#">Fans</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bar"></div>
        </div>
      </section>
      <section className="section-header-second">
        <div className="container">
          <h1>--&gt; Content goes here &lt;--</h1>
        </div>
      </section>
    </header>
  );
}
