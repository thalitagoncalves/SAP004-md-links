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

const mdLinks = (diretorios) => {
  return new Promise((resolve, reject) => {
    const regex = /(\[.[^[\]]*\])(\([^#][^)]+)/gm;
    const findedFiles = findMDFiles(diretorios, []);
    if (findedFiles.length < 1) {
      reject("We did not found any files.")
    }
    const results = findedFiles.map(fileMD => {
      const file = fs.readFileSync(fileMD, 'utf8')
      const match = file.match(regex);
      return match.map((str) => {
        const arrLink = str.replace('[', '').split('](');
        const strObject = {
          text: arrLink[0],
          link: arrLink[1],
          file: fileMD,
        };
        return strObject;
      })
    }
    )
    resolve(results[0])
  })
}

module.exports = mdLinks;
