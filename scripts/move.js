const { readFileDir } = require('./travel');
const fse = require('fs-extra');
const path = require('path');

const movePic = async (list) => {
    await Promise.all(list.filter(item => item.endsWith('.png') || item.endsWith('.jpg'))
        .map(async (item) => {
            const arr = item.split(path.sep);
            const len = arr.length;
            await fse.ensureDir(path.join(__dirname, `../public/${arr[len - 2]}`))
            await fse.copyFile(item, path.join(__dirname, `../public/${arr[len - 2]}/${arr[len - 1]}`));
        }));
}

async function main() {
    const list = await readFileDir(path.join(__dirname, '../content'));
    (await movePic(list));
}

main();