const fs = require('fs');
const findMDFiles = require('./find-MD-files.js')

const mdLinks = (diretorios) => {
  return new Promise((resolve, reject) => {
    const regex = /(\[.[^[\]]*\])(\([^#][^)]+)/gm;
    const findedFiles = findMDFiles(diretorios, []);
    if (findedFiles.length === 0) {
      reject("We did not found any files.")
    }
    const results = findedFiles.map(fileMD => {
      const file = fs.readFileSync(fileMD, 'utf8')
      const match = file.match(regex);
      if (match) {
        return match.map((str) => {
          const arrLink = str.replace('[', '').split('](');
          const strObject = {
            text: arrLink[0],
            link: arrLink[1],
            file: fileMD,
          };
          return strObject;
        })
      } else {
        return null;
      }
    },
    )
    resolve(results)
  })
}

module.exports = mdLinks;
