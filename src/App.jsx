import { initialTheme } from "./lib/theme";
import Color from "./Components/Color/Color";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>

      <h2>{initialTheme.name}</h2>

      {initialTheme.colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
