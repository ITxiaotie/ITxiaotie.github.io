# Security policy

This repository contains the public GitHub Pages front end. Account, session,
role, and payment-review operations are handled by a separately deployed Sites
service backed by D1. The backend source and secrets are intentionally excluded
from this public repository.

## Access model

- Passwords are stored as PBKDF2-SHA256 hashes with per-user random salts.
- Session tokens are random values; only their SHA-256 hashes are stored.
- Login failures are rate limited by IP and account identifier.
- The browser sends bearer tokens only to the configured account-service origin.
- Payment is verified manually. The QR image does not provide an automatic
  payment callback, so a pending request must be compared with the WeChat bill.
- The bootstrap administrator password is a deployment secret and must be
  changed immediately after the first successful login.

The learning content is hosted as static files. The interface enforces free and
paid navigation, but static hosting is not DRM: a determined visitor who already
knows a raw asset URL may still request that file. Strong content-level secrecy
would require moving protected question data and PDFs to authenticated object
storage.

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
