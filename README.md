# vm-sdk
VendingMachine JavaScript SDK

## Publishing

Publishing is handled by `.github/workflows/publish.yml` when a tag matching
`vX.Y.Z` is pushed. The workflow validates that the tag exactly matches
`package.json`, installs with `npm ci`, runs tests, builds the package, inspects
the npm tarball, checks that the version is not already published, and then
publishes to npm using trusted publishing/OIDC (no `NPM_TOKEN` secret required).

### One-time setup before the first release

**1. Configure npm trusted publishing** on the [vm-sdk npm package settings](https://www.npmjs.com/package/vm-sdk):

- Provider: GitHub Actions
- Organization/user: `TosiDrop`
- Repository: `vm-sdk`
- Workflow filename: `publish.yml`

**2. Harden the npm package** (Publish Access settings on npmjs.com):

- Require 2FA for publishing
- Disallow legacy token publishing (automation tokens cannot publish)

**3. Protect release tags** in GitHub repository settings → Rules → New ruleset:

- Target: tags matching `v*.*.*`
- Require linear history / restrict deletions so tags cannot be overwritten or removed after release

### Release flow

```sh
# Bump version in package.json and create a signed tag
npm version 1.2.3
git push origin main --follow-tags
```

The `v1.2.3` tag triggers the publish workflow automatically.
GitHub Actions uses OIDC to obtain a temporary npm token — no stored secret needed.
