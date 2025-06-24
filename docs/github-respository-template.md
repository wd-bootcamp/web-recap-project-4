# Setup GitHub Repository Template and Issues

## Getting Started with the GitHub Repository Template

This template is designed to help you quickly start a new project with predefined issues and a GitHub project board.

> 💡 **Recommendation**: Read this entire guide carefully before executing the steps to ensure a smooth setup process.

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

   - Open the newly created `.env` file.
   - Fill in your GitHub username, repository name, and the personal access token you created:

     ```plaintext
     GITHUB_TOKEN=your_personal_access_token_here
     REPO_OWNER=your_github_username
     REPO_NAME=your_repository_name
     ```

3. - **Check `.gitignore`**: Ensure that your `.env` file is listed in your `.gitignore` file to prevent it from being committed to your GitHub repository.

> 🚨 If you accidentally pushed your access token to GitHub, make sure to regenerate or remove it as fast as possible! This potentially grants access to your GitHub account.

<details>
  <summary> 💡 What is a `.env` file?</summary>

In the `.env file`, you can define variables and their values, which the application will read at runtime. This approach helps keep sensitive information, such as API keys and database credentials, secure and separate from the application's source code.

We need this file for our access token to ensure that the token remains private and is not hard-coded into the source code, protecting it from being exposed publicly.
</details>

### Step 4: Run the Script to Create Issues

In the root directory of your repository, run the following command to install necessary dependencies and run the issue creation script:

```bash
npm install
npm run create-issues
```

> 💡 This script will automatically create predefined issues in your repository.

🚨 Make sure to run `npm run create-issues` only once for your repository.

✅ After creating the issues, you can revoke the token you created if you do not want to let it expire.

### Step 5: Create a GitHub Project Board

1. **Go to your repository** on GitHub.
2. **Click on "Projects"**: Find the "Projects" tab and click on it.
3. **Create a new project**: Click "New project", choose the "Board" template and name your project.
4. **Ensure that the visibility of your board is set to 'public'** (Settings -> Danger Zone -> Visibility).

### Step 6: Bulk Add Issues to the Project Board

1. **Add issues**: Click on "Add item" in the "ToDo" column.
2. **Select issues**: Click on the "+" and "Add item from repository".
3. **Select repository**: Select your project.
4. **Add to project**: Select all items and click "Add selected items".

### Step 7: Deploy to Vercel

1. **Go to Vercel**: Visit [Vercel](https://vercel.com) and sign up or log in.
2. **Import your project**: Click on "New Project" and select your GitHub repository.

### Step 8: Start working and have fun. 🌈

Start the development server:

```bash
npm run dev
```
