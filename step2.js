const fs = require('fs');
const axios = require('axios');

function fileCat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log(`Error reading ${path}:` , err);
        }
        console.log(data);
    })
}

async function webCat(url) {
    try {
        const { data } = await axios.get(url);
        console.log(data);
    } catch(err){
        console.log(`Error fetching ${url}`, err.code)
    }
}

function isValidURL(input) {
    try {
        new URL(input);
        return true;
    } catch(err) { return false; }
}

for(let i = 2; i < process.argv.length; i++) {

    if(isValidURL(process.argv[i])){
        webCat(process.argv[i]);
    } else {
        fileCat(process.argv[i]);
    }
}