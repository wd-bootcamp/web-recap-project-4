## Value Proposition

**As a** User

**I want to** have a button to copy the hex code to the clipboard

**in order to** easily use it in my project.

https://github.com/neuefische/web-react-recap-project/assets/93415777/5353809f-46fa-4594-89e2-2150b1a3ab91

### Acceptance Criteria

- A "Copy to Clipboard" button is available.
- Clicking the button copies the hex code to the clipboard.
- A confirmation message appears indicating that the color has been copied successfully.
- Confirmation message disappears after 3 seconds

### Tasks

- Create a CopyToClipboard component
- Use [navigator.clipboard.writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) API to copy the hex code to the clipboard ( Note that it is async )
- Introduce a state that handles the confirmation message
- Utilize useEffect to set a 3 second timeout to reset the state
