# Office of Foreign Affairs — Telangana Rakshana Sena

Static informational website for the TRS Office of Foreign Affairs. Plain HTML/CSS/JS, no build step, no framework, no dependencies.

Live at: https://trsoofa.com

## Structure

```
index.html          About Us (home)
leadership/index.html   Leadership profiles
agendas/index.html      The three initial agendas
contact/index.html      Contact details
css/styles.css       Design system (colors, type, layout)
js/main.js           Mobile menu, accordions, agenda scroll-spy
images/              Photos and the TRS logo
sitemap.xml, robots.txt, CNAME   Deployment config for GitHub Pages
```

Each page other than the homepage lives in its own folder as `index.html` so it's reachable at a clean URL (`/leadership`, `/agendas`, `/contact`) with no `.html` extension. All internal links and asset references (`css/`, `js/`, `images/`) use root-absolute paths (e.g. `/css/styles.css`), so the site must be served from a real HTTP root — see below.

## Viewing it locally

Root-absolute paths mean opening `index.html` directly as a `file://` URL will not load CSS/JS/images correctly. Serve it instead:

```bash
cd website
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Use `/leadership`, `/agendas`, `/contact` for the other pages.

Alternatively, in VS Code: install the "Live Server" extension and "Open with Live Server" on `index.html`.

## Deployment

Deployed via GitHub Pages with a custom domain (`CNAME` → trsoofa.com). Pushing to `main` is sufficient; no build step runs. GitHub Pages serves each `<folder>/index.html` at `/<folder>`.

## Content policy

All biographical and policy content is sourced from material explicitly supplied for this project (party documents, Wikipedia for public-figure bios, and photos/details given directly). Where information wasn't available, pages say so rather than inventing it (see the Contact page).
