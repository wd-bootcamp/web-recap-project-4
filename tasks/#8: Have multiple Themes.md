## Value Proposition

**As a** User

**I want to** create and view multiple color themes

**in order to** work on more than one project.

https://github.com/neuefische/web-react-recap-project/assets/93415777/e4f84a52-2a1a-4ad1-b246-fdfffa03edfc

### Acceptance Criteria

- I can create multiple themes
- I can switch between themes using a dropdown menu
- Each theme can be independently edited, deleted, and saved.
- You can not edit or delete the Default Theme

 🚨 This is a complex ticket that requires major refactoring

You may want to introduce themes like so:

```javascript
export const initialThemes = [
  {
    id: "t1",
    name: "Default Theme",
    colors: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"],
  },
  {
    id: "t2",
    name: "2nd Theme",
    colors: ["c10", "c11", "c12"],
  },
];
```
