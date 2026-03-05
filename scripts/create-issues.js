import { readdirSync } from "fs";
import { join, basename } from "path";
import { execSync } from "child_process";

const templatesDir = "./tasks";

const files = readdirSync(templatesDir).filter((file) =>
  file.endsWith(".md")
);

for (const file of files) {
  const filePath = join(templatesDir, file);

  // Titel = Dateiname ohne .md
  const title = basename(file, ".md");

  console.log(`Creating issue: ${title}`);

  execSync(
    `gh issue create --title "${title}" --body-file "${filePath}"`,
    { stdio: "inherit" }
  );
}