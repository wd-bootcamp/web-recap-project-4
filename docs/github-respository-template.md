# Setup GitHub Repository Template and Issues

## Getting Started with the GitHub Repository Template

This template is designed to help you quickly start a new project with predefined issues and a GitHub project board.

> 💡 **Recommendation**: Read this entire guide carefully before executing the steps to ensure a smooth setup process.

### Step 1: Use the Template

Click on the "Use this template" button on the GitHub template repository page to create your new repository.

### Step 2: Create Issues

Clone the Github repository to your local maschine.

Now you need to create the Issues in your new Github Repository to track your tasks across the project:
In the root project folder run the script: 
```bash 
npm run create-issues
```
This script makes use of the Github CLI and creates 8 issues in your Github Repository. You can find them now in the `Issues` tab of your Github Repository.

### Step 3: Create a GitHub Project Board

1. **Go to your repository** on GitHub.
2. **Click on "Projects"**: Find the "Projects" tab and click on it.
3. **Create a new project**: Click "New project", choose the "Board" template and name your project.
4. **Import Items from Repository:** Make sure this option is checked.
5. **Create Project**
4. **Ensure that the visibility of your board is set to 'public':** More Options (3 Dot Button) -> Settings -> Danger Zone -> Visibility

### Step 4: Deploy to Vercel

1. **Go to Vercel**: Visit [Vercel](https://vercel.com/) and sign up or log in.
2. **Import your project**: Click on "New Project" and select your GitHub repository.

### Step 5: Start working and have fun. 🌈

Start the development server:

```bash
npm run dev
```
