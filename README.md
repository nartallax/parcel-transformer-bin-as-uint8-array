# Binary file transformer

This plugin will embed binary files as base64 into your bundle. In runtime that base64 will be parsed to `Uint8Array`.  

## Install

Install the package:

```bash
	npm install --save-dev @nartallax/parcel-transformer-bin-as-uint8-array
```

Then update `.parcelrc`:

```json
"transformers": {
    "*.bin": ["...", "@nartallax/parcel-transformer-bin-as-uint8-array"]
}
```
