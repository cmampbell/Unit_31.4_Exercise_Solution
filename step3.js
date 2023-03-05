const fs = require('fs');
const axios = require('axios');

function fileCat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}:`, err);
        }
        return data
    })
}

async function webCat(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        return (`Error fetching ${url}. ${err.code}`)
    }
}

function isValidURL(input) {
    try {
        new URL(input);
        return true;
    } catch (err) { return false; }
}

function fileCat(read) {
    fs.readFile(read, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${read}:`, err);
        }
        console.log(data)
        return data;
    })
}

function writeFile(path, output) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${read}:`, err);
        }
        fs.writeFile(output, data, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error writing to ${path}. ${err}`)
            }
            else {
                console.log(`Succesfully wrote to ${path}`)
            }
        })
    })
}

function writeWebFile(output, data) {
    fs.writeFile(output, data, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error writing to ${path}. ${err}`)
        }
        else {
            console.log(`Succesfully wrote to ${output}`)
        }
    })
}

async function runCommand() {
    if (process.argv.includes('--out')) {
        // write to process.argv[3] from [4]
        if (isValidURL(process.argv[4])) {
            try {
                const data = await webCat(process.argv[4])
                writeWebFile(process.argv[3], data)
            }
            catch (err) {
                console.log(`Error fetching ${url}. ${err.code}`)
            }
        } else {
            try {
                writeFile(process.argv[4], process.argv[3]);
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        for (let i = 2; i < process.argv.length; i++) {
            if (isValidURL(process.argv[i])) {
                webCat(process.argv[i]);
            } else {
                fileCat(process.argv[i]);
            }
        }
    }
}
runCommand()