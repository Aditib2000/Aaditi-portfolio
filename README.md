# Aaditi Bhandari — Portfolio

Interactive personal portfolio built with plain HTML/CSS/JS (no build step, deploys as-is to GitHub Pages).

## Sections
- Hero with animated role typing + live stat counters
- About / Education
- Skills — filterable, categorized, animated progress bars
- Experience — interactive timeline (click to expand each role)
- Projects — filterable cards pulled from resume highlights
- Live Demo — screenshots + walkthrough of [resume-match-checker](https://github.com/Aditib2000/resume-match-checker), an AI resume/ATS matching tool
- Contact — click-to-copy email, LinkedIn, GitHub

## Run locally
```bash
python -m http.server 8080
```
then open http://localhost:8080

## Structure
```
index.html
css/style.css
js/script.js
assets/
  Aaditi_Bhandari_Resume.pdf
  screenshots/            # resume-match-checker screenshots for the live demo section
```

## Deploy
Pushed to GitHub, served via GitHub Pages (Settings → Pages → Deploy from branch → main → /root).
