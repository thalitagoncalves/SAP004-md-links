#!/usr/bin/env node

const mdLinks = require('./src/filter-md-links.js');

mdLinks(process.argv[2]).then((element) => {
    element.forEach(arr => {
        arr.forEach(obj => {
            console.log(`\n text: ${obj.text} \n link: ${obj.link} \n file: ${obj.file}`)

        })
    });
}).catch(err => console.log(err))