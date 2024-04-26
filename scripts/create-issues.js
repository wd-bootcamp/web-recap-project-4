import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const templateOwner = "neuefische"; // Owner of the template repository
const templateRepo = "web-react-recap-project"; // Name of the template repository

const targetOwner = process.env.REPO_OWNER; // Owner of the target repository
const targetRepo = process.env.REPO_NAME; // Name of the target repository

async function createLabel(label) {
  await octokit.issues.createLabel({
    owner: targetOwner,
    repo: targetRepo,
    name: label.name,
    color: label.color,
  });
}

async function createIssue(title, body, labels) {
  // Ensure that labels exist in the target repository
  for (const label of labels) {
    try {
      await octokit.issues.getLabel({
        owner: targetOwner,
        repo: targetRepo,
        name: label.name,
      });
    } catch (error) {
      if (error.status === 404) {
        await createLabel(label);
      } else {
        throw error;
      }
    }
  }

  await octokit.issues.create({
    owner: targetOwner,
    repo: targetRepo,
    title,
    body,
    labels: labels.map((label) => label.name),
  });
}

async function fetchIssues() {
  const response = await octokit.issues.listForRepo({
    owner: templateOwner,
    repo: templateRepo,
  });
  return response.data;
}

async function main() {
  const issues = await fetchIssues();
  for (const issue of issues) {
    // Extract labels with their names and colors from the template issue
    const labels = issue.labels.map((label) => ({
      name: label.name,
      color: label.color,
    }));
    await createIssue(issue.title, issue.body, labels);
    console.log(`Created issue: ${issue.title}`);
  }
}

main().catch((err) => {
  console.error("Failed to create issues:", err);
  process.exit(1);
});
