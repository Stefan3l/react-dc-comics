import comics from "./comics";

export default function CardComics() {
  return (
    <div className="row-card">
      {comics.map((elm) => (
        <div className="col-card">
          <div className="card">
            <div className="wraper-img">
              <img src={elm.thumb} alt={elm.title} />
            </div>
            <h1>{elm.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
