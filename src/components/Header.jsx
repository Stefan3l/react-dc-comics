import navElements from "./navHeader/navElements";

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
              {
                <ul>
                  {navElements.map((elm, id) => (
                    <li key={id}>
                      <a href={elm.url}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
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
