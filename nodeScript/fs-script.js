const fs = require('fs')

fs.mkdirSync('example')

try{

    fs.writeFileSync(`./example/file-example.js`, 'alright')
}catch(e){
    console.log(e)
}