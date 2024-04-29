# React Recap Project: Theme Creator

#### Getting Started with the GitHub Repository Template

This template is designed to help you quickly start a new project with predefined issues and a GitHub project board. Follow these steps to configure and use your new repository:

### Step 1: Use the Template

Click on the "Use this template" button on the GitHub template repository page to create your new repository.

### Step 2: Create a Personal Access Token

1. **Navigate to Githubs Token Settings**:
   [Create Access Token](https://github.com/settings/tokens)
2. **Personal access token**: Click on "Generate new token (classic)".
3. **Token settings**: Give your token a descriptive name, set the expiration as desired, and select the `repo` scope. This allows the token to access repositories.

4. **Generate token**: Click "Generate token" at the bottom.

**Important:** Copy your new personal access token. You won’t be able to see it again!

> 💡 You can recreate your token at any time, so do not worry if you accidentally did not copy it

### Step 3: Setup Environment Variables

1. **Clone your repository**: Use `git clone` to clone your new repository to your local machine.
2. **Create `.env` file**:
   - Navigate to the root directory of your cloned repository.
   - Use the command line to create a copy of the `.env.example` file:
     ```bash
     cp .env.example .env
     ```
   - Open the `.env` file.
   - Fill in your GitHub username, repository name, and the personal access token you created:
     ```plaintext
     GITHUB_TOKEN=your_personal_access_token_here
     REPO_OWNER=your_github_username
     REPO_NAME=your_repository_name
     ```

### Step 4: Run the Script to Create Issues

In the root directory of your repository, run the following command to install necessary dependencies and run the issue creation script:

```bash
npm install
npm run create-issues
```

💡 This script will automatically create predefined issues in your repository.

🚨 Make sure to run `npm run create-issues` only once for your repository.

✅ After creating the issues to can revoke the token you created, if you do not want to let it expire

### Step 5: Create a GitHub Project Board

1. **Go to your repository** on GitHub.
2. **Click on 'Projects'**: Find the 'Projects' tab and click on it.
3. **Create a new project**: Click "New project", name your project, and choose the "Board" template

### Step 6: Bulk Add Issues to the Project Board

1. **Add issues**: Click on "Add item" in the "ToDo" column.
2. **Select issues**: Click on the "+" and "Add item from repository"
3. **Select repository**: Select your react-recap-project
4. **Add to project**: Select all items and click "Add selected items"

### Step 7: Start working

Start the development server:

```bash
npm run dev
```

### Final Notes

Make sure to keep your personal access token secure and do not share it or commit it to your repository. Follow the steps outlined above to ensure your project setup is successful.

> 🚨 If you accidentally pushed your access token to github, make sure to regenerate or remove it as fast as possible! This potentially grants access to your github account.
