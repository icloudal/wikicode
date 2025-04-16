# 📘 How to Deploy This MkDocs Site

This project uses **[MkDocs](https://www.mkdocs.org/)** with the **Material for MkDocs** theme to generate a beautiful, responsive documentation site.

Follow these steps to run the site locally and deploy it to **GitHub Pages**.

---

## ✅ Requirements

Make sure you have the following installed:

- [Python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/)
- Git

Install MkDocs and the Material theme:

```bash
pip install mkdocs mkdocs-material
```

## ▶️ Serve Locally

mkdocs serve -> http://127.0.0.1:8000
mkdocs build -> generate static files -> Optional
mkdocs gh-deploy - deploy the site to GitHub Pages

Create the .github/workflows/ci.yml

name: ci
on:
  push:
    branches:
      - master
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force

