# Changelog

## 0.1.0-alpha.2 (2025-05-22)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/rsata/giphy-sdk-ts-test/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** manual updates ([#12](https://github.com/rsata/giphy-sdk-ts-test/issues/12)) ([85f92f7](https://github.com/rsata/giphy-sdk-ts-test/commit/85f92f7789a35e4dfe6bb01aa25df5dfab76e283))
* **api:** manual updates ([#9](https://github.com/rsata/giphy-sdk-ts-test/issues/9)) ([6198b7e](https://github.com/rsata/giphy-sdk-ts-test/commit/6198b7e9e258fc7c6cf16ed5ac35ec597d2acc6c))
* **client:** add withOptions helper ([46e7dcb](https://github.com/rsata/giphy-sdk-ts-test/commit/46e7dcb447b067fb6170e1b65c036fe3d78402f8))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#13](https://github.com/rsata/giphy-sdk-ts-test/issues/13)) ([c59543f](https://github.com/rsata/giphy-sdk-ts-test/commit/c59543f2c1c38d6970f4b5e94178473d49b4e5b9))
* **client:** always overwrite when merging headers ([9637583](https://github.com/rsata/giphy-sdk-ts-test/commit/96375836cb612fe771b16523ba0a0685250ddf1b))
* **client:** send `X-Stainless-Timeout` in seconds ([#10](https://github.com/rsata/giphy-sdk-ts-test/issues/10)) ([a704ccd](https://github.com/rsata/giphy-sdk-ts-test/commit/a704ccdb382eabea72bfead9a71f576fe7898447))
* **client:** send all configured auth headers ([#15](https://github.com/rsata/giphy-sdk-ts-test/issues/15)) ([132c051](https://github.com/rsata/giphy-sdk-ts-test/commit/132c051c30965c736ecd0321b970a68169fe628d))
* **internal:** fix file uploads in node 18 jest ([c81cf29](https://github.com/rsata/giphy-sdk-ts-test/commit/c81cf29a961e2df7f4d7553c4ade39449fbadd0f))
* **mcp:** remove unused tools.ts ([#14](https://github.com/rsata/giphy-sdk-ts-test/issues/14)) ([026fe6b](https://github.com/rsata/giphy-sdk-ts-test/commit/026fe6b09dc03472dccee113d0762ef8f4f58083))
* pluralize `list` response variables ([#8](https://github.com/rsata/giphy-sdk-ts-test/issues/8)) ([d855570](https://github.com/rsata/giphy-sdk-ts-test/commit/d8555700186ec00c2c3abf8beeef9a328da5ee52))


### Chores

* **ci:** add timeout thresholds for CI jobs ([cc034b5](https://github.com/rsata/giphy-sdk-ts-test/commit/cc034b53c28e4ae3eddd8ea8f1c8a65489e017d2))
* **ci:** only use depot for staging repos ([e494df8](https://github.com/rsata/giphy-sdk-ts-test/commit/e494df8e505ee17d50fe054563d845a3cb8c0536))
* **client:** drop support for EOL node versions ([7d0515a](https://github.com/rsata/giphy-sdk-ts-test/commit/7d0515a618b9288246a86b191400ee50d0eba4e4))
* **client:** minor internal fixes ([fb12027](https://github.com/rsata/giphy-sdk-ts-test/commit/fb12027972dca63e7eb1164753013d5d53cbf588))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#6](https://github.com/rsata/giphy-sdk-ts-test/issues/6)) ([95bb25d](https://github.com/rsata/giphy-sdk-ts-test/commit/95bb25decff617dd1e876bd737b48b5078ef2404))
* **docs:** grammar improvements ([ddfc13b](https://github.com/rsata/giphy-sdk-ts-test/commit/ddfc13b1f9392601c5ec0a06b43be7ced2c1d6ff))
* **internal:** add aliases for Record and Array ([#11](https://github.com/rsata/giphy-sdk-ts-test/issues/11)) ([58e68dd](https://github.com/rsata/giphy-sdk-ts-test/commit/58e68ddd0362d658a8d97d0975c7c91408a5cac3))
* **internal:** codegen related update ([378765e](https://github.com/rsata/giphy-sdk-ts-test/commit/378765ecce1542e7550490ed65ffc9404519c264))
* **internal:** codegen related update ([5f3435c](https://github.com/rsata/giphy-sdk-ts-test/commit/5f3435c963b09f48b4c4cc9ac2851f35542501bc))
* **internal:** improve node 18 shims ([2ebe618](https://github.com/rsata/giphy-sdk-ts-test/commit/2ebe618708a4711e4115b795e1bf8e580389fb24))
* **internal:** reduce CI branch coverage ([a6327c6](https://github.com/rsata/giphy-sdk-ts-test/commit/a6327c65faa52e96accb199ba0e3d53c6f13bd20))
* **internal:** refactor utils ([35b840a](https://github.com/rsata/giphy-sdk-ts-test/commit/35b840aac7a2df1b114aa7d6dd1e770a1a12942e))
* **internal:** share typescript helpers ([a254636](https://github.com/rsata/giphy-sdk-ts-test/commit/a2546362b8cec387cfca35def65acd44cd81e005))
* **internal:** upload builds and expand CI branch coverage ([44d647d](https://github.com/rsata/giphy-sdk-ts-test/commit/44d647dc31a709ff85836ac2c5dac3e9e9212842))
* **package:** remove engines ([e220016](https://github.com/rsata/giphy-sdk-ts-test/commit/e220016fb06f0b3f612c1383cc7469c19659011f))
* **perf:** faster base64 decoding ([410e89f](https://github.com/rsata/giphy-sdk-ts-test/commit/410e89f8319a0688478a160729860b1645d9b95b))


### Documentation

* **readme:** fix typo ([ddbdb2a](https://github.com/rsata/giphy-sdk-ts-test/commit/ddbdb2a30f3fdf731bdb94250edeeeb7e7cd5f04))

## 0.1.0-alpha.1 (2025-03-19)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/rsata/giphy-sdk-ts-test/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([3c38c26](https://github.com/rsata/giphy-sdk-ts-test/commit/3c38c26b5769046fda77a7844ea99009a97324db))


### Chores

* configure new SDK language ([65cb870](https://github.com/rsata/giphy-sdk-ts-test/commit/65cb8709dc7fe11da04231fbed50694bf6be15a8))
* go live ([#1](https://github.com/rsata/giphy-sdk-ts-test/issues/1)) ([b7f88a2](https://github.com/rsata/giphy-sdk-ts-test/commit/b7f88a23d769b77685f59b89068f06306b392188))
* update SDK settings ([#3](https://github.com/rsata/giphy-sdk-ts-test/issues/3)) ([e22fda9](https://github.com/rsata/giphy-sdk-ts-test/commit/e22fda936afe417fa66980c1018ca69497afb5cc))
