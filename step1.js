const fs = require('fs');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log(`Error reading ${path}:` , err)
        }
        console.log(data)
    })
}

for(let i = 2; i < process.argv.length; i++) {
    cat(process.argv[i])
}