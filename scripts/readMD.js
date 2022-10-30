const { readFileDir } = require('./travel');
const fse = require('fs-extra');
const path = require('path');

const pattern = /^---((.|\r\n)*?)---/;
const kvPattern = /(\w+):/;
const imgPattern = /
const readMD = async (list) => {
    const mds = [];
    await Promise.all(list.filter(item => item.endsWith('.md')).map(async (item) => {
        const res = await fse.readFile(item, 'utf8');
        const $1 = pattern.exec(res)?.at(1) || '';
        const obj = $1.split('\n').filter(Boolean).reduce((acc, curr) => {
            const key = kvPattern.exec(curr.trim())?.at(1);
            const value = curr?.trim().replace(kvPattern, '');
            if (key && value) {
                acc[key?.trim()] = value?.trim();
            }
            return acc;
        }, {})
        mds.push({
            content: res.replace(pattern, ''),
            params: obj,
        });
    }));

    return mds;
}

async function main() {
    const list = await readFileDir(path.join(__dirname, '../content'));
    const mds = await readMD(list);
    console.log(await readMD(list));
}

main();