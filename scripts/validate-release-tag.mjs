import { readFileSync } from 'node:fs';

const tag = process.argv[2] ?? process.env.GITHUB_REF_NAME ?? '';
const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const tagPattern = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!tagPattern.test(tag)) {
  fail(`Release tag "${tag}" must match vX.Y.Z, for example v1.2.3.`);
}

if (!versionPattern.test(packageJson.version)) {
  fail(`package.json version "${packageJson.version}" must match X.Y.Z.`);
}

const expectedTag = `v${packageJson.version}`;

if (tag !== expectedTag) {
  fail(`Release tag "${tag}" does not match package.json version "${expectedTag}".`);
}

console.log(`Release tag ${tag} matches package.json version ${packageJson.version}.`);
