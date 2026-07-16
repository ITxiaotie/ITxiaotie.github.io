# Security policy

This repository contains a static GitHub Pages website. It has no server-side
application, login system, database, payment flow, or form submission endpoint.

## Reporting a vulnerability

Please do not publish exploit details, credentials, personal data, or other
sensitive material in a public issue. Use GitHub private vulnerability
reporting when it is available for this repository. For a non-sensitive bug,
open a normal issue with steps to reproduce and the affected page URL.

## Deployment rules

- Never commit passwords, tokens, cookies, private keys, or personal data.
- Keep all resources on HTTPS.
- Pin third-party scripts to an exact version and require Subresource Integrity.
- Review every new external domain before adding it to `security.js`.
- Treat all HTML inserted with `innerHTML` as trusted build-time content only.
