# Security policy

This repository contains a public static GitHub Pages front end. Registration,
login and study history are intentionally device-local browser features. There
is no administrator or payment backend.

## Access model

- Passwords are stored in localStorage only as PBKDF2-SHA256 hashes with
  per-user random salts; plaintext passwords are never stored.
- Sessions expire after 30 days and remain in the current browser profile.
- No account data is sent to a project account service.
- Clearing browser storage removes local accounts, sessions and study history.

页面导航在登录成功后才显示题库。GitHub Pages 的静态登录门禁不是 DRM，也不能阻止知道资源直链的人读取公开文件；若未来需要真正的跨设备账号、服务端权限和严格题库保护，必须迁移到带服务端鉴权的托管与对象存储。

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
