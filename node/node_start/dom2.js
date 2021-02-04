const fs = require('fs');

let oldPath = './files1/intel.svg';
let newPath = './files2/intel.svg';
 
let readableStream = fs.createReadStream(oldPath);
let writeableStream = fs.createWriteStream(newPath);
 
readableStream.pipe(writeableStream);
fs.unlink(oldPath, (err) => {
    if (err) {
        console.log('ERRR!!!');
    };
});





 

 