# Audit and completion report

## Implemented

Responsive editorial redesign with midnight navy #1B1E4A, warm stone #AFAEA2, light/dark themes, locally hosted Computer Modern regular/bold/italic typography throughout, animated portrait ID card, reduced-motion support, responsive navigation, semantic landmarks, focus styles, skip link, metadata and favicon.

Three featured projects, public GitHub links, résumé preview and PDF download, native accessible document dialog, certificate thumbnail previews/search/category filters, six skill groups, source-backed education/virtual experience, corrected email and LinkedIn, and explicitly labelled email-app contact alternative.

## Original issues resolved

- Original HTML is approximately 12 MB with duplicated base64 assets and embedded Word résumé. New HTML is approximately 27 KB; assets are separate and image previews are lazy-loaded.
- Old email differed from the latest résumé; corrected to ipradiptadolai@gmail.com.
- Old “View Resume” downloaded Word; replaced with supplied PDF preview, direct-open fallback, and correct download filename.
- Mobile navigation hid section links with no menu; implemented a menu with expanded state and Escape support.
- Contact Send Message button had no backend or handler; replaced with a clearly labelled mailto link.
- Original certificate modal lacked native focus containment and Escape behavior; replaced with dialog.
- TATA and Quantium cards referenced one another’s documents; corrected using the PDF contents.
- Unsubstantiated “verified” blanket labels, proficiency ratings and inconsistent certificate counts removed.
- Blocking welcome overlay and continuous typewriter/background effects removed; subtle ID animation preserved.

## Preservation and content limits

All 20 original certificate files are preserved byte-for-byte; hashes are in asset-inventory.json. All have actual thumbnail previews. Issuer verification addresses come from document text; external issuer checks are not claimed. Dates on four image-only documents require manual review. Legacy source dates are retained privately in structured metadata for audit.

The PDF résumé mentions SkillMed ISO 13485, Oracle Agentic AI and Google AI for Data Analysis; corresponding documents were not supplied with this request. The Johnson & Johnson certificate was not attached. No screenshot of a real project dashboard was supplied; the OncoLens illustration is explicitly a schematic. ECG details are intentionally limited to the user-provided project title and general topic; private code is not copied. The public OncoLens README governs implementation claims and no accuracy number is asserted.

## Validation

- PASS: JavaScript syntax for both scripts.
- PASS: 98 HTML asset/anchor/external references inspected, all local targets and anchors exist.
- PASS: all 20 certificate hashes match extraction; résumé has a PDF header and matches supplied file byte-for-byte.
- PASS: font file references and bundled license present.
- PASS browser: page renders, Computer Modern styling, light/dark toggle and preference persistence after reload.
- PASS browser: mobile menu expansion and automatic close on section navigation.
- PASS browser: text search “MEMS” returns one credential; Biomedical category returns four.
- PASS browser: certificate PDF dialog, résumé PDF iframe source, and Escape dismissal. Actual résumé download completed as Pradipta_Dolai_Resume.pdf.
- PASS browser: captured console error/warning list empty; no broken loaded images; no horizontal overflow at 390 px phone, 663 px side-panel, and 1440 px desktop widths. Mobile menu also passed Enter/Escape keyboard checks.
- Direct repository link verified using GitHub connector; contact and LinkedIn targets cross-checked against résumé link annotations.
- Not exhaustively tested: screen-reader behavior, every keyboard path, PDF viewer rendering on every browser, actual email-client launch, external issuer record availability, and automated accessibility/Lighthouse audit. No diagnostic-performance testing is applicable.

## Publication

GitHub Pages Actions workflow prepared. Pull requests run validation only; deployment is limited to main. The deploy job alone has pages:write and id-token:write. No tokens are placed in frontend files. Repository remains private, unmerged and unpublished pending owner approval. GitHub Pages settings and branch/environment approval rules require owner configuration before deployment. A live public URL is not asserted.

## Changed files

index.html; assets/style.css; assets/theme.js; assets/app.js; assets/favicon.svg; assets/fonts/*; assets/images/portrait.webp; assets/images/cert-*.webp; assets/certificates/*; assets/resume/Pradipta_Dolai_Resume.pdf; data/certificates.json; docs/asset-inventory.json; docs/REPORT.md; scripts/check.mjs; scripts/package.mjs; .github/workflows/pages.yml; .gitignore; README.md.

