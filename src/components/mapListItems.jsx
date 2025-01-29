export default function MapListItems({ items }) {
  return (
    <ul>
      {items.map((elm) => (
        <li key={elm.id}>
          <a href={elm.url}>{elm.text}</a>
        </li>
      ))}
    </ul>
  );
}
