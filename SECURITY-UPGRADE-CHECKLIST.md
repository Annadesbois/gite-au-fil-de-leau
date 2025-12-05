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