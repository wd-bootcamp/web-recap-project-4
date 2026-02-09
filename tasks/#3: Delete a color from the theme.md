## Value Proposition

**As a** user,

**I want to** delete a color from the theme,

**So that** I can remove colors that I no longer need or want in my custom theme.

https://github.com/neuefische/web-react-recap-project/assets/93415777/c1cec9d4-bcb8-4f1f-b9ba-9da34f54c849

### Acceptance Criteria

- Each color card displayed in the theme includes a "Delete" button for easy removal.
- Clicking the "Delete" button should show a confirmation message before actually deleting
- If there are no colors left in the theme after deletion, display a message encouraging users to add new colors.

### Tasks

- Implement a function to handle the deletion of a color.
- Introduce a state to handle the confirmation message
- Reuse the `.color-card-headline` css rule for the confirm question, but maybe rename it to `.color-card-hightlight`
