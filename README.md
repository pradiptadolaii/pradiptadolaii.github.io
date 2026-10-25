# Pradipta Dolai portfolio

Buildless HTML, CSS and JavaScript. All typography uses locally hosted Computer Modern Unicode web fonts (license in assets/fonts/LICENSE.txt).

## Preview and validate

Serve this folder using any local static HTTP server. Run `node scripts/check.mjs` to validate references, certificate hashes, and the résumé. Run `node scripts/package.mjs` to create the deployable `_site` directory. Only index.html, assets and data are published.

## Content maintenance

The supplied DOC-2026-F-PDOLAI.pdf is copied byte-for-byte to assets/resume/Pradipta_Dolai_Resume.pdf. Update all facts against the latest résumé before publishing. Certificate metadata lives in data/certificates.json; gallery markup is generated into index.html so it works without JavaScript. Change both together. No frontend GitHub token or live API is used; the public OncoLens card works without API rate limits.

## Deployment

A pull request validates without deploying. A push to main after an approved merge validates, packages, and deploys with GitHub Pages Actions. GitHub repository Settings → Pages must be configured to GitHub Actions. Publishing is not enabled or performed by this task. The repository is private pending owner review; private-repository Pages availability depends on the account plan. Do not change visibility without approval.

Protect main with required review/status checks and, if desired, add required reviewers to the github-pages environment before enabling publication. Workflow YAML alone cannot enforce human approval or prevent a maintainer pushing directly to main.

## Sources and assets

- Supplied original HTML: all 20 certificate documents retained unchanged, tracked by SHA-256 in docs/asset-inventory.json.
- Supplied latest PDF résumé: education, project, experience and contact source of truth.
- Public OncoLens README: https://github.com/pradiptadolaii/OncoLens/blob/main/README.md
- Computer Modern Unicode: https://github.com/bitmaks/cm-web-fonts (original copyright and SIL OFL retained).
- Workflow reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

The original HTML backup is delivered separately as original-portfolio-backup.html and excluded from the public site. Existing certificate documents are not licensed for unrestricted reuse. No project or model software license is inferred.
