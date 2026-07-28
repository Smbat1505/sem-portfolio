# SemAntony Portfolio

Personal engineering portfolio built with Next.js, React, TypeScript, Vite,
vinext, and Cloudflare Workers.

## Requirements

- Node.js 22.13 or newer
- npm 11.3.0

## Local development

```bash
npm ci
npm run dev
```

Before committing, run the complete local verification:

```bash
npm run check
npm run build
```

## Production deployment

The production application is configured as the Cloudflare Worker
`semantony-portfolio` with `semantony.com` as its Custom Domain.

GitHub Actions performs the following on pull requests:

1. installs dependencies from `package-lock.json`;
2. runs TypeScript checks, ESLint, and Vitest;
3. creates a production build.

A push to `main` performs the same checks and then deploys the verified build
to Cloudflare Workers. Pull requests never deploy and do not receive production
credentials.

### One-time GitHub setup

Create an empty GitHub repository without a generated README, license, or
`.gitignore`. Before the first push, open
**Settings → Secrets and variables → Actions** in that repository and create
these repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

Create the API token in Cloudflare with the **Edit Cloudflare Workers**
template and scope it only to the account and `semantony.com` zone used by this
project. Never commit either value to the repository.

Then connect this local repository:

```bash
git remote add origin git@github.com:<github-account>/sem-portfolio.git
git push -u origin main
```

That first push to `main` will deploy the Worker and attach the Custom Domain
declared in `wrangler.jsonc`. Before pushing, confirm that replacing any
existing origin for `semantony.com` is intentional.

### Manual fallback

Authenticate locally without sharing Cloudflare credentials:

```bash
npx wrangler login
npx wrangler whoami
npm run deploy
```

For a configuration-only rehearsal that neither builds nor deploys:

```bash
npm run deploy:dry-run
```

## Deployment ownership

- `wrangler.jsonc` is the source of truth for the Worker and domain routing.
- `.github/workflows/cloudflare-production.yml` is the source of truth for
  verification and production delivery.
- GitHub Secrets are the only place for CI credentials.
- Cloudflare automatically manages DNS and TLS for the configured Custom
  Domain.
