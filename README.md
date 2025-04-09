# TUM Research Data Knowledge Hub

This is the GitHub repository for the [TUM Research Data Knowledge Hub](https://tum-rdhub.github.io/knowledge-hub/), a site built with [Docusaurus](https://docusaurus.io/). It is designed to be easily editable and extendable by contributors without a professional development background.

This guide explains how to set up the project locally on a Windows machine (with notes for Mac/Linux users), make changes, add content, and deploy updates to the live site.

## Prerequisites

Before you begin, make sure you have the following software installed on your computer:

1.  **Node.js (LTS version recommended):** Docusaurus runs on Node.js. Download the LTS (Long Term Support) version from [nodejs.org](https://nodejs.org/). Installing Node.js will also install `npm` (Node Package Manager), which you'll need.

2.  **Git:** You need Git to download (clone) the repository and manage changes.

- **Windows:** [Download Git for Windows](https://git-scm.com/download/win) and use Git Bash.

- **Mac:** Install using Homebrew: `brew install git`

- **Linux:** Use your package manager, e.g. `sudo apt install git`

3.  **A Code Editor (Optional but Recommended):** A code editor like Visual Studio Code ([code.visualstudio.com](https://code.visualstudio.com/)) makes editing files much easier with features like syntax highlighting.

## 1. Setting up locally

This process downloads the project code to your computer and installs the necessary tools Docusaurus needs to run.

1.  **Open your terminal:**

- **Windows:** Use Git Bash. Search for "Git Bash" in your Windows Start menu and open it. This gives you a command-line interface.

- **Mac/Linux:** Use your system's Terminal app.

2.  **Navigate to a suitable directory:** Choose where you want to store the project files. For example, to put it in a `projects` folder in your user directory, type:

	```bash
	cd ~/projects
	mkdir knowledge-hub
	cd knowledge-hub
	```

3.  **Clone the repository:** Copy the project files from GitHub to your computer.

	```bash
	git clone https://github.com/tum-rdhub/knowledge-hub.git
	```

4.  **Navigate into the project directory:**

	```bash
	cd knowledge-hub
	```

5.  **Install dependencies:**

	```bash
	npm install
	```

You now have a complete copy of the project on your computer, ready for editing and previewing.

## 2. Running the development server (local preview)

To see how your changes look before deploying them, you can run a local web server.

1.  **Make sure you are in the project directory** (`knowledge-hub`) in your terminal/Git Bash.

2.  **Start the development server:**

	```bash
	npm start
	```

3.  **Wait for compilation:** The command will build the site and start a server. It will usually output something like:

	```bash
	[INFO] Starting the development server...
	[SUCCESS] Docusaurus website is running at: http://localhost:3000/knowledge-hub/
	```

4.  **View the site:** Open your web browser (like Chrome, Firefox, or Edge) and go to the address shown (usually `http://localhost:3000/knowledge-hub/`).

	This local version will automatically update in your browser whenever you save changes to the project files. This is great for previewing your work!

**To stop the local server:** Go back to the Git Bash/terminal window where it's running and press `Ctrl + C`.

## 3. Making changes and adding content

> 💡 **Tip:** You can also edit Markdown files directly in your browser by clicking the ✏️ pencil icon next to a file in the GitHub repo.

Most content is written in Markdown (`.md` or `.mdx` files). Here's where you'll likely edit things:

- **Markdown pages:**

	- Look inside the `docs/` directory. Files and folders here correspond to the structure of the pages sections on the site.

	- To edit an existing page, find the corresponding `.mdx` file and open it in your code editor.

	- To add a new page, create a new `.mdx` file within the appropriate subfolder in `docs/`. You might need to update sidebar configuration files (`sidebars.js` or similar) to make it appear in the navigation.

- **Static pages:** More complex or custom pages might be in `src/pages/`. These often use React components (`.js` or `.jsx` files) alongside Markdown.

- **Configuration:** Site-wide settings (like the title, navigation bar, footer) are in `docusaurus.config.js`. Be careful when editing this file.

**Workflow:**

1. Ensure the local development server is running (`npm start`).

2. Open the project folder (`knowledge-hub`) in your code editor (like **VS Code**).

3. Find the file you want to edit or create a new file in the appropriate directory (`docs/`, `blog/`, etc.).

4. Make your changes and save the file.

5. Check your web browser pointed at `http://localhost:3000/knowledge-hub/`. The page should automatically refresh to show your changes.

## 4. Saving your changes (using Git)

After making changes you're happy with, you need to save them back to the main GitHub repository. This doesn't update the _live_ website yet, it just updates the _source code_ stored on GitHub.

1.  **Stop the local server** (if running) by pressing `Ctrl + C` in its Git Bash/terminal window.

2.  **Check status:** See which files you've changed.

	```bash
	git status
	```

3.  **Stage changes:** Tell Git which changes you want to save. To stage all changes:

	```bash
	git add .
	```

	Or stage specific files:

	```bash
	git add docs/my-new-page.mdx
	git add blog/YYYY-MM-DD-new-post.mdx
	```

4.  **Commit changes:** Save a snapshot of the staged changes with a descriptive message.

	```bash
	git commit -m "Add documentation for X feature"
    # Or: git commit -m "Fix typo in introduction page"
    # Or: git commit -m "Draft new blog post about Y"
	```

5.  **Pull latest changes (IMPORTANT):** Before pushing your changes, pull any changes others might have made to avoid conflicts.

	```bash
	git pull origin main
	```

	If there are conflicts, Git will tell you. Resolving conflicts can be tricky; ask for help if needed.

6.  **Push changes:** Upload your committed changes to the main branch on GitHub.

	```bash
	git push origin main
	```

	Now your source code changes are safely stored on GitHub.

## 5. Deploying to the live site (GitHub Pages)

This step takes the current source code, builds the static website files, and pushes _only those built files_ to the special `gh-pages` branch on GitHub. GitHub Pages automatically serves the live website from this branch.

**Important:** Make sure you have saved and pushed all your source code changes to the `main` branch _before_ deploying. The deployment command uses the _current_ state of your local files.

1.  **Make sure you are in the project directory** (`knowledge-hub`) in Git Bash/terminal.

2.  **Run the deployment command:** Replace `<Your GitHub Username>` with your actual GitHub username.

- **Windows (Git Bash):**

	```bash
	set GIT_USER=<Your GitHub Username>
	npm run deploy
	```

- **Mac/Linux:**

	```bash
	export GIT_USER=<Your GitHub Username>
	npm run deploy
	```

	- _Why `GIT_USER`?_ `GIT_USER` tells the deployment tool who you are on GitHub. Replace it with your GitHub username (e.g. `set GIT_USER=janedoe`)

	- _What it does:_ First runs `npm run build`, then pushes the contents of the `build/` folder to the `gh-pages` branch on GitHub.

3.  **Wait for completion:** The process might take a minute or two. You'll see output messages about building and deploying.

4.  **Check the live site:** Go to [https://tum-rdhub.github.io/knowledge-hub/](https://tum-rdhub.github.io/knowledge-hub/). It might take a few minutes for GitHub Pages to update and show your latest changes. You can sometimes check the deployment progress under the "Actions" or "Environments" tab in your GitHub repository settings.

**You only need to run `npm run deploy` when you want to update the live website.** You can make many local changes and Git commits/pushes before doing a deployment.

## Building the site locally (optional)

If you want to see the final, optimized files that get deployed without actually deploying, you can run the build command:

```bash
npm run build
```

This creates a `build/` directory in your project folder. It contains the complete static website files.

---

🎉 **That's it!** You now know how to set up, edit, preview, and deploy your changes.
