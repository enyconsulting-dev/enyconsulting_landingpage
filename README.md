Eny Consulting Landing Page

## Secure form submissions

Contact and resource-opt-in forms submit to the same-origin Vercel Function at
`/api/submit-form`. It verifies Cloudflare Turnstile tokens before forwarding the
existing payload to the existing GoHighLevel webhook. No new CRM webhook or CRM
pipeline key is required.

Before deploying, configure these Vercel environment variables for each target
environment:

- `VITE_TURNSTILE_SITE_KEY`: the public Turnstile site key. This is included in
  the frontend build.
- `TURNSTILE_SECRET_KEY`: the private Turnstile secret key. Keep this server-side
  and never use a `VITE_` prefix.

Register the production hostname (and any preview/local hostnames you use) in
the Turnstile widget settings. Rebuild and redeploy after changing the
`VITE_TURNSTILE_SITE_KEY`. Forms intentionally fail closed until both keys are
configured. Local development of the function requires `vercel dev`; Vite's
development server does not run Vercel Functions.