const fse = require('fs-extra');
const path = require('path');

const readFileDir = async (filePath) => {
    const list = [];
    await fileTravel(filePath, list);
    return list;
}

const fileTravel = async (filePath, list) => {
    try {
        const stat = await fse.statSync(filePath);
        if (stat.isDirectory()) {
            const files = await fse.readdir(filePath);
            await Promise.all(files.map(f => fileTravel(path.join(filePath, f), list)))
        } else if (stat.isFile()) {
            list.push(filePath);
        }
    } catch (e) {
        console.log(e);
    }
}

readFileDir(path.join(__dirname, '../content'));

module.exports = {
    readFileDir,
}