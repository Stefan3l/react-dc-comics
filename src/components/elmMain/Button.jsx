export default function Button({ children, type = "btn-primary", name }) {
  const classCss = `button ${type}`;
  return <button className={classCss}>{name}</button>;
}
