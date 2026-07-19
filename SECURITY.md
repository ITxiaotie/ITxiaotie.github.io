# Security policy

This repository contains the public GitHub Pages front end. Account, session,
role operations are handled by a separately deployed Sites
service backed by D1. The backend source and secrets are intentionally excluded
from this public repository.

## Access model

- Passwords are stored as PBKDF2-SHA256 hashes with per-user random salts.
- Session tokens are random values; only their SHA-256 hashes are stored.
- Login failures are rate limited by IP and account identifier.
- The browser sends bearer tokens only to the configured account-service origin.
- The bootstrap administrator password is a deployment secret and must be
  changed immediately after the first successful login.

408 真题与数学二真题当前临时免费开放，无需账号或付款。王道知识库、章节练习和模拟考试由超级管理员入口保护。静态托管并不是 DRM：若未来需要严格保护题库文件，必须将其迁移到带鉴权的对象存储。

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
