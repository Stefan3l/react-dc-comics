export default function MapListItems({ items, title }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((elm) => (
          <li key={elm.id}>
            <a href={elm.url}>{elm.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
