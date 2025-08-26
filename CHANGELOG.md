
## [Unreleased]

### Fixed
- Corrected `exports` map in `package.json` to avoid fallback resolution in Node environments.
  - Replaced broken `"import": "./esm.mjs"` with a valid conditional export block.
  - Ensures compatibility with Metro, Vite, and Node without resolution warnings.

### [0.2.4](https://github.com/satya164/use-latest-callback/compare/v0.2.3...v0.2.4) (2025-06-14)


### Bug Fixes

* add a default condition for exports ([e28a2fb](https://github.com/satya164/use-latest-callback/commit/e28a2fbe8183faa8efdff4085c3e5e0589eb66f9))
* remove platform-specific extensions for proper esm support ([df06008](https://github.com/satya164/use-latest-callback/commit/df06008a562c385fac1a6f0b5cd765096ec27d1d))

### [0.2.3](https://github.com/satya164/use-latest-callback/compare/v0.2.2...v0.2.3) (2024-11-14)

### [0.2.2](https://github.com/satya164/use-latest-callback/compare/v0.2.1...v0.2.2) (2024-11-14)

### [0.2.1](https://github.com/satya164/use-latest-callback/compare/v0.2.0...v0.2.1) (2024-07-10)

## [0.2.0](https://github.com/satya164/use-latest-callback/compare/v0.1.11...v0.2.0) (2024-07-10)


### Features

* remove .default from commonjs output ([80c3cb2](https://github.com/satya164/use-latest-callback/commit/80c3cb2e01b3d6d63bae052f2376493baae6656e))

### [0.1.11](https://github.com/satya164/use-latest-callback/compare/v0.1.10...v0.1.11) (2024-07-07)


### Bug Fixes

* fix missing file in files field ([2857de3](https://github.com/satya164/use-latest-callback/commit/2857de3d30a1598b915cb948f8d0138f4abc7010))

### [0.1.10](https://github.com/satya164/use-latest-callback/compare/v0.1.9...v0.1.10) (2024-07-07)


### Bug Fixes

* make the exports esm compatible ([626d3fd](https://github.com/satya164/use-latest-callback/commit/626d3fdfbb1c262e5d908248f8a463f37b689b96))

### [0.1.9](https://github.com/satya164/use-latest-callback/compare/v0.1.8...v0.1.9) (2023-11-09)


### Bug Fixes

* fix paths in `package.json` ([13828a2](https://github.com/satya164/use-latest-callback/commit/13828a21077f8885a2b00ab0a15badc3a4e3a3c6))

### [0.1.8](https://github.com/satya164/use-latest-callback/compare/v0.1.7...v0.1.8) (2023-11-09)
