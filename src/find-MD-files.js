const fs = require('fs');
const path = require('path');

function findMDFiles(dir, previousFiles) {
    const diretorios = fs.readdirSync(dir);
    const removeNodeModules = diretorios.indexOf('node_modules');
    if (removeNodeModules > -1) {
        diretorios.splice(removeNodeModules, 1)
    }
    return diretorios.reduce((getFiles, file) => {
        const getDir = path.join(dir, file);
        if (fs.statSync(getDir).isDirectory()) {
            findMDFiles(getDir, getFiles);
        } else if ((path.extname(file) === ".md")) {
            getFiles.push(getDir);
        }
        return getFiles;
    }, previousFiles || [])
}

module.exports = findMDFiles;