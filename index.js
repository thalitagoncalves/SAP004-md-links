const fs = require('fs');

const mdLinks = (path) => {
  fs.readFile(path, 'utf8', (err, file) => {
    return new Promise((resolve, reject) => {
      if (err) {
        reject(err.message)
      } else {
        const regex = /(\[.[^[\]]*\])(\([^#][^)]+)/gm;
        const match = file.match(regex);
        if (match !== null) {
          const arr = [];
          match.map((str) => {
            const arrLink = str.replace('[', '').split('](');
            const strObject = { 
            text:arrLink[0],
            link:arrLink[1], 
            file: path,
           };
            arr.push(strObject)
          })
          return resolve(arr);
        }
      }
    })
  })
}

mdLinks('/home/thalita/Documentos/SAP004-md-links/README.md')

//module.exports = mdLinks();

