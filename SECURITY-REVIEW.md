# Security review

**Review date:** 2026-11-18
**Scope:** Static review of application code, dependency manifests and lockfiles, build/deployment configuration, and public assets.

## Summary

One medium-severity issue was identified: the browser sends form submissions directly to a public CRM webhook. The remaining items are hardening opportunities or conditional risks, not confirmed exploitable vulnerabilities. No critical or high-severity issue was confirmed.

## Findings

| # | Severity | File | Lines | Finding and recommended action |
|---|----------|------|-------|--------------------------------|
| 1 | 🟡 MEDIUM | [`src/services/webhookService.js`](src/services/webhookService.js) | 5, 21, 53 | Contact and resource-opt-in data is sent directly from the browser to a public GoHighLevel webhook. Visitors can submit fabricated or replayed requests, potentially creating CRM records or triggering downstream automations. Proxy submissions through a backend/serverless endpoint; keep webhook details server-side, validate fields and origin, and add bot/abuse controls. |
| 2 | ⚪ LOW | [`vercel.json`](vercel.json) | — | Security response headers are not configured. Add a suitable Content Security Policy, HSTS, frame protection, `X-Content-Type-Options`, Referrer Policy, and Permissions Policy. |
| 3 | ⚪ LOW | [`public/index.html`](public/index.html) | — | CSS and font assets load from third parties without Subresource Integrity. Vendor these assets locally or pin them and use verified integrity hashes where supported. |
| 4 | ⚪ LOW | [`vite.config.js`](vite.config.js) | 16 | Production sourcemaps may expose source if deployed publicly. Disable public sourcemaps or upload them only to a private error-reporting service. |
| 5 | ⚪ LOW | [`package.json`](package.json), [`package-lock.json`](package-lock.json), [`pnpm-lock.yaml`](pnpm-lock.yaml) | — | Conflicting lockfiles make dependency installation and audit results ambiguous. Standardize on PNPM, refresh and validate its lockfile, and remove the obsolete npm lockfile. Advisories observed against the stale npm lockfile are not confirmed for the active PNPM dependency graph. |
| 6 | ⚪ LOW | [`public/`](public) | — | PDF resources are publicly downloadable. If the opt-in form is intended to gate access, move the files out of the public directory and serve them through an access-controlled backend. |
| 7 | ⚪ LOW | [`src/App.jsx`](src/App.jsx) | 46–78 | Canonical metadata is derived from `window.location.origin`. Restrict canonical URLs to the production origin to avoid indexing alternate deployment domains. |

## Scope and limitations

This was a static repository review. No live deployment requests, build execution, or intrusive testing were performed. Public exposure of sourcemaps and the intended access policy for the PDFs were not verified.

No confirmed XSS, SQL injection, command injection, unsafe deserialization, hardcoded application secret, exposed authentication state, or malicious SVG/PDF content was identified. The dependency advisories found in the stale npm lockfile were not established as applicable to the active PNPM dependency graph.
