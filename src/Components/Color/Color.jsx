import "./Color.css";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <p>{color.role}</p>
      <p>{color.hex}</p>
    </div>
  );
}
