## Value Proposition

**As a** Developer

**I want to** check the contrast ratio via an API when colors are added or edited

**in order to** ensure accessibility compliance.

https://github.com/neuefische/web-react-recap-project/assets/93415777/acb2b6f6-6a34-4300-957b-b766de773c7f

### Acceptance Criteria

- An API call is made automatically when a color or contrast text is added or edited.
- The application displays a message indicating whether the contrast ratio is sufficient next to the respective color card.

### Tasks

- Use this [Contrast Checker API](https://www.aremycolorsaccessible.com/api-page) to display the overall a11y score for each color

### Hint

This is how you can send data to an API, it is called a post request.

```javascript
async function postFetch() {
  const response = await fetch("https://www.some-api-url.com/api", {
    method: "POST",
    body: JSON.stringify({ cool: true }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```
