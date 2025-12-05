# Security Upgrade Checklist

Use this checklist whenever upgrading dependencies (especially security fixes):

1. Identify exactly what is changing

   - Note the package name and version change (e.g. `next 16.0.3 → 16.0.7`).
   - Confirm it is coming from the official npm package, not a typo-squatted name.

2. Verify the upgrade is legitimate

   - Check the package’s official CHANGELOG or GitHub releases for this version.
   - Confirm there is a real security fix or feature and the version exists on npm.

3. Review the diff in package-lock.json

   - After the upgrade, inspect `package-lock.json` in git:
     - Make sure only expected packages/versions changed.
     - Watch for unexpected new packages with similar names.

4. Run local security checks

   - Run `npm audit` again.
   - Run your test suite and basic app smoke test (start app, key pages load).

5. Commit with a clear message

   - Example: `chore: upgrade next to 16.0.7 for RCE fix (GHSA-9qr9-h5gf-34mp)`.

6. Keep a record
   - Note in this file or in a CHANGELOG what was upgraded and why.

## Known dev-only vulnerabilities (accepted temporarily)

These vulnerabilities occur only inside development tools (ESLint, Prisma CLI, build-time tooling).  
They are **not shipped** in the production Next.js build and do **not** affect runtime security.

Accepted for now:

### Critical (patched via override)

- `minimist` – prototype pollution  
  (Patched globally using `"overrides": { "minimist": "1.2.8" }`)

### High (Prisma dev-only)

- `hono` – several security issues (Prisma CLI only)
- `valibot` – ReDoS (Prisma CLI only)

### Moderate (ESLint / Next build toolchain)

- `js-yaml` – prototype pollution (ESLint only)
- `brace-expansion` – ReDoS (glob matching in ESLint)
- `micromatch` – ReDoS (glob matching in ESLint)
- `nanoid` (<3.3.8) – predictable IDs (Next.js internal PostCSS usage)

### Low (dev-only utilities)

These come from internal utilities used in linting, file matching, or build steps.  
They do not appear in runtime bundles and pose low practical risk.

- `glob-parent` – low-level glob utility used by ESLint/Next build
- `json5` – config parsing in tsconfig-paths (ESLint only)
- `globals` – indirect ESLint dependency  
  _(Note: exact low-vuln list may vary slightly per audit run)_

### Re-evaluation

These items will be reviewed again when:

- ESLint releases versions with patched `js-yaml` / globbing stack
- Prisma updates `@prisma/dev` to remove vulnerable `hono` / `valibot`
- Next.js bumps internal PostCSS and `nanoid`
