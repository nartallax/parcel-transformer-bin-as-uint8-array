const {Transformer} = require('@parcel/plugin');

module.exports = new Transformer({
  async transform({asset}) {
    let buffer = await asset.getBuffer();
    let js = `
const binString = atob("${buffer.toString('base64')}")
const buf = new Uint8Array(binString.length)
for (var i = 0; i < binString.length; i++) {
	buf[i] = binString.charCodeAt(i);
}
module.exports = buf
`;
    return [{ type: "js", content: js }];
  }
});