#!/usr/bin/env node

// const { program } = require('commander');

const mdLinks = require('./index.js');

mdLinks(process.argv[2]).then((element) => {
    element.forEach(obj => {
        console.log(`\n text: ${obj.text} \n link: ${obj.link} \n file: ${obj.file}`)
    });
}).catch(err => console.log(err))