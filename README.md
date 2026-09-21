# Alex Stoner | CPRE 4910 Portfolio

React/Vite portfolio site for the Iowa State University CPRE 4910 senior portfolio. The site uses hash navigation so it works reliably on GitHub Pages without server-side routing.

## Run locally

```bash
npm install
npm run dev
```

## Add portfolio documents

1. Open the repository folder in VS Code.
2. Open `public/documents/`.
3. Copy your PDF files into that folder and rename them to these exact filenames:

- `resume.pdf`
- `general-education-reflection.pdf`
- `cumulative-reflection.pdf`
- `ethics-paper.pdf`
- `senior-design.pdf`

For example, your resume should be located at `public/documents/resume.pdf`, not just in the repository root. The Reflections, Resume, and Senior Design pages embed these files in scrollable readers and include download links. After adding or replacing a PDF, refresh the local site to see it.

## Customize content

Edit `src/App.jsx` to replace the project, internship, senior design, and contact placeholders. The three project cards are intentionally structured around the course requirements: description, role, skills gained, and resources used. Senior Design includes the additional big-picture contribution and supporting document fields.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**. The expected site URL is:

`https://alexstoner10.github.io/CPRE4910-Portfolio/`

You can also preview the production build locally:

```bash
npm run build
npm run preview
```