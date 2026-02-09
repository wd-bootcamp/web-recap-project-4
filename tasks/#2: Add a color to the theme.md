## Value Proposition

**As a** user,

**I want to** add a color to the theme,

**So that** I can customize my color scheme according to my preferences.

https://github.com/neuefische/web-react-recap-project/assets/93415777/d0a53ef8-6e31-4ad6-b3f3-560e2bc6b14e

### Acceptance Criteria

- Users can input a role, hex value, and contrast text via a form to add a new color to the theme.
- The form should be prefilled with default values to guide user input.
- Upon submission, the new color is added to the top of the colors and is displayed on a color card to confirm addition.
- The inputs for hex and contrastText should include both color and text input types for easy and accurate color selection.

### Tasks

- Implement a `ColorForm` component that allows users to submit new colors to the theme.
- Use a package to generate unique id's like [nanoid](https://www.npmjs.com/package/nanoid) or [ui](https://www.npmjs.com/package/uid)
- Develop a `ColorInput` component to handle synchronized text and color inputs, ensuring that they reflect the same value. ( Controlled Inputs )

### Hints

<details>
<summary>Hint: ColorForm- Spoiler Alert! 🚨</summary>

`./Components/ColorForm/ColorForm.jsx`

```js
import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>ADD COLOR</button>
    </form>
  );
}
```

</details>

<details>
<summary>Hint: ColorInput - Spoiler Alert! 🚨</summary>

`./ColorInput/ColorInput`

```js
import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
```

</details>
