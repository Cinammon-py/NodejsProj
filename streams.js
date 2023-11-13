const fs = require('fs');

const readStream = fs.createReadStream('./Docs/large.txt', { encoding: 'utf8' }); // use utf8 to convert to string
const writeStream = fs.createWriteStream('./Docs/large2.txt');

readStream.on('data', (chunck) => {
  console.log('---- NEW CHUNCK ----');
  console.log(chunck);
  writeStream.write('\n\nNEW CHUNK\n\n');
  writeStream.write(chunck);
});

// **** PIPING ****

// readStream.pipe(writeStream);

// **** does the same this as above except much easier in one line ****
