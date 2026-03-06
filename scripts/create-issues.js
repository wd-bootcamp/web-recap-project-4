import { readdirSync } from "fs";
import { join, basename } from "path";
import { execSync } from "child_process";
import os from "os";

// Funktion: Prüfen, ob Kommando existiert
function commandExists(command) {
  try {
    if (os.platform() === "win32") {
      execSync(`where ${command}`, { stdio: "ignore" });
    } else {
      execSync(`command -v ${command}`, { stdio: "ignore" });
    }
    return true;
  } catch {
    return false;
  }
}

// Funktion: gh installieren, je nach Plattform
function installGh() {
  const platform = os.platform();

  if (platform === "darwin") {
    console.log("GitHub CLI wird über Homebrew installiert...");
    try {
      execSync("brew install gh", { stdio: "inherit" });
    } catch (e) {
      console.error(
        "Fehler beim Installieren von gh über Homebrew:",
        e.message,
      );
      process.exit(1);
    }
  } else if (platform === "win32") {
    console.log("GitHub CLI wird über winget installiert...");
    try {
      execSync("winget install --id GitHub.cli -e --silent", {
        stdio: "inherit",
      });
      // 🔹 PATH für Git Bash aktualisieren
      const ghPaths = [
        "C:\\Program Files\\GitHub CLI\\", // Standard Winget-Pfad
        `${process.env.USERPROFILE}\\AppData\\Local\\Microsoft\\WindowsApps\\`, // Git Bash kompatibel
      ];
      process.env.PATH = ghPaths.join(";") + ";" + process.env.PATH;
    } catch {
      console.error(
        "Fehler beim Installieren von gh über winget. Bitte installiere es manuell: https://github.com/cli/cli",
      );
      process.exit(1);
    }
  } else {
    console.error(
      "Automatische Installation von gh wird auf diesem Betriebssystem nicht unterstützt. Bitte installieren Sie es manuell.",
    );
    process.exit(1);
  }
}

// 1️⃣ Prüfen, ob gh installiert ist
if (!commandExists("gh")) {
  console.log("GitHub CLI (gh) ist nicht installiert.");
  installGh();
}

// 2️⃣ Prüfen, ob du eingeloggt bist, sonst Login starten
let loggedIn = true;
try {
  execSync("gh auth status", { stdio: "inherit" });
} catch {
  loggedIn = false;
}

if (!loggedIn) {
  console.log("\nDu bist noch nicht bei GitHub angemeldet.");
  console.log("Starte den Authentifizierungsprozess mit `gh auth login`.");
  console.log("💡 Hilfestellung für die Anmeldung:");
  console.log("1. Wähle: GitHub.com");
  console.log("2. Wähle: SSH (für Git Operationen)");
  console.log("3. Upload SSH key: Überspringen (Skip)");
  console.log(
    "4. Wähle: Login with a Web browser und folge den Anweisungen auf GitHub\n",
  );

  try {
    // Authentifizierungsprozess starten (interaktiv)
    execSync("gh auth login", { stdio: "inherit" });
    console.log(
      "\nLogin erfolgreich! Weiter geht's mit der Erstellung der Issues.\n",
    );
  } catch {
    console.error(
      "GitHub Authentifizierung fehlgeschlagen. Script wird beendet.",
    );
    process.exit(1);
  }
}

// 3️⃣ Templates lesen
const templatesDir = "./tasks";
const files = readdirSync(templatesDir).filter((file) => file.endsWith(".md"));

// 4️⃣ Issues erstellen
for (const file of files) {
  const filePath = join(templatesDir, file);
  const title = basename(file, ".md")
    .split("-")
    .map((str, index) =>
      index === 0 ? `#${str}:` : str.charAt(0).toUpperCase() + str.slice(1),
    )
    .join(" ");

  console.log(`Erstelle Issue: ${title}`);
  execSync(`gh issue create --title "${title}" --body-file "${filePath}"`, {
    stdio: "inherit",
  });
}

console.log("\nAlle Issues wurden erfolgreich erstellt!");
