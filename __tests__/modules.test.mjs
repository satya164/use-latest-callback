import assert from 'node:assert';
import test from 'node:test';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

test('import', async () => {
  // eslint-disable-next-line import/no-unresolved
  const result = await import('use-latest-callback');

  assert.strictEqual(typeof result.default, 'function');
  assert.strictEqual(result.default.name, 'useLatestCallback');
});

test('require', () => {
  const result = require('..');

  assert.strictEqual(typeof result, 'function');
  assert.strictEqual(result.name, 'useLatestCallback');
});
