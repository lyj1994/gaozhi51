const path = require('path');
const fse = require('fs-extra');

const { readFileDir } = require("./travel");
const { readMD } = require('./readMD');
const { movePic } = require('./move');

async function main() {
    const list = await readFileDir(path.join(__dirname, '../content'));
    const mds = await readMD(list);
    await movePic(list);
    await fse.writeJSON(path.join(__dirname, '../content/all.json'), mds)
}

main();