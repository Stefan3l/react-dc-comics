export default function Button({ children, variant = "primary" }) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary ",
    succes: "btn-succes",
  };

  return <button className={`${variants[variant]}`}>{children}</button>;
}
