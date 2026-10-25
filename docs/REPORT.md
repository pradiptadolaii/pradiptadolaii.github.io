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

The PDF résumé mentions SkillMed ISO 13485, Oracle Agentic AI and Google AI for Data Analysis; corresponding documents were not supplied with this request. The Johnson & Johnson certificate was supplied later and is now integrated. No screenshot of a real project dashboard was supplied; the OncoLens illustration is explicitly a schematic. ECG details are intentionally limited to the user-provided project title and general topic; private code is not copied. The public OncoLens README governs implementation claims and no accuracy number is asserted.

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


## Refinements from screenshot review

Expanded About Me and Education with source-backed university, school, specialization, academic results, languages and training details. Added visible inline GitHub and LinkedIn platform marks to every social destination and contact icons. All five Forage virtual experiences now have separate entries: Johnson & Johnson MedTech, Deloitte, Quantium, TATA, VISTA; four supplied completion certificates link directly from those entries.

Replaced the simple contact alternative with an accessible inquiry form: required name/email/message, topic selection, native validation, prepared email draft, and optional copy. No message is sent until the visitor opens and sends from their own email app. No backend, tracking, or secret is involved.

PASS browser: all five experience entries present; all GitHub/LinkedIn destinations include an icon; valid inquiry prepares a correctly encoded mailto draft; invalid email blocks preparation; editing hides the stale draft. Updated local reference count: 106 after new experience certificate links. JavaScript syntax and asset/hash checks pass.

## Section order and toolbox update

Moved About Me directly after the hero, split Education into its own section, then placed Projects and Experience. Navigation and section numbering match the new progression. Added 14 labelled, self-hosted toolbox marks, with Devicon MIT licensing and trademark notices retained in assets/icons.

PASS: browser DOM order is home → about → education → projects → experience → skills → certifications → resume → contact; all 14 logos loaded; no desktop overflow; Education navigation closes the mobile menu. Local reference/asset/hash validation now inspects 122 references.

## Project evidence and password-protected report

Added the supplied Johnson & Johnson MedTech Robotics and Controls Forage completion certificate dated October 16, 2026. The certificate gallery now contains 21 preserved documents, and the certificate links from both Project 3 and the corresponding virtual-experience entry.

Added a cropped robotics program photograph from the user-supplied screenshot to Project 3; added explicitly conceptual ECG and brain-imaging artwork to the other project cards. The imagery does not imply a live device screenshot or clinical result.

The diagnostic report uses a password unlock dialog with browser-side PBKDF2-SHA-256 (600,000 iterations) and AES-256-GCM. Only a salted encrypted payload is deployed; the original DOCX and readable report HTML stay outside public assets and Git history. The password is selected in a local setup page and is never sent to its server. After unlocking, the readable report appears in a sandboxed frame, and the original DOCX can be downloaded. Closing or locking the dialog clears the view and revokes its download URL. Approved readers can retain a downloaded copy; changing a password requires re-encrypting and replacing the payload.

PASS: isolated browser integration test rejected an incorrect password, decrypted the test report with its correct test password, enabled the original download, and removed both readable content and download URL on re-lock. The owner’s password was not read. The actual encrypted payload passes schema/salt/IV checks; publication checks reject plaintext diagnostic-report files.

Added the supplied STTP_CER.pdf unchanged, with a real thumbnail, to the Biomedical gallery. Education includes the requested STTP wording and a certificate preview link. The certificate identifies Adamas University and programme dates August 17–24, 2026; an issue date is not asserted. Gallery total is now 22 preserved documents.

Replaced the MRI and ECG schematics with optimized, locally hosted AI-generated editorial-style images. Each is visibly labelled illustrative; neither is presented as an actual project screenshot, patient image, or built prototype. The supplied robotics photograph is retained. Prompts and provenance are documented in docs/PROJECT_IMAGE_DETAILS.md.

The inquiry form now opens a pre-addressed email immediately after successful validation. It retains an Open email app retry link, adds a correctly encoded Gmail compose fallback, and supports copying the inquiry. Visitors review and send through their own email provider; the website does not claim server-side delivery.

Generated mailto and Gmail compose links were verified with recipient, subject, sender contact and encoded message intact. Browser automation security blocked the external email-app launch, so that final operating-system handoff requires a manual visitor test. No test message was sent.


## Direct inquiry delivery

The contact form submits name, reply email, inquiry topic, message, UTC submission time, and source page through FormSubmit to ipradiptadolai@gmail.com. The owner confirmed email activation. The page shows pending, accepted, and failure states; failed submissions retain entered details. Duplicate submissions are blocked while pending. A honeypot and provider spam protection are retained. No private email credentials are deployed. The no-JavaScript fallback uses the standard FormSubmit POST endpoint. Provider acceptance does not independently confirm inbox receipt. Transport tests cover full field forwarding, activation, success, and service/network failures.


## MedOrbit portfolio guide

Approved MedOrbit design 07: enhanced vector orbital/neural medical-cross logo, translucent navy panel, icon-only launcher in the footer immediately above Back to top. Chat opens on demand, supports topic shortcuts, source links, follow-up context, clear chat, and Escape to close. This is explicitly labelled an on-device, curated knowledge guide, not generative AI. No API key, remote chat service, question telemetry, or persistent chat storage is used. Answers use public portfolio facts and do not disclose the protected report or its password. Routing tests cover topics, context, unknown facts, private access, and medical scope.


## Test scores — approved publication

Five supplied results are summarized after Education with expandable breakdowns and unchanged source documents under assets/scores. Gen AI Tools PDF: 100/100, Gold, 23 August 2026; Data Analytics with AI and Gen AI screenshot: 270/300 (90%), 15 March 2026; NBCE IT final statement: 340/400 (85%), result 12 June 2025; IT class test: total 88, A+, no maximum or date stated; school-level science assessment: 81/100, E/Excellent, Class VI, 2017. No missing maximum/date or issuer has been invented. Student registration and roll identifiers are omitted from summaries, but remain in the original linked documents. Original file hashes are recorded in docs/test-score-sources.json. The owner approved publication of the section and linked original result documents after reviewing the local preview.
