const fs = require('fs');

//_______________________________________________
// **** READING FILES ****
//_______________________________________________;

/*
fs.readFile('./Docs/text.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString()); // use the toString() method to display the data as text instead as buffer
});
*/

//_______________________________________________;
// **** WRITING TO FILES *****
//_______________________________________________;

/*
fs.writeFile('./Docs/text.txt', 'This will be written to the file', () => {
  console.log('Written to file');
});
*/

//_______________________________________________
// **** DIRECTORIES *****
//_______________________________________________

/*
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('assets fldr created');
  });
} else {
  console.log('exists already!, directory will be removed'); // if the DIR exists, it will be deleted
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('fldr deleted!');
  });
}
*/

//_______________________________________________
// ***** DELETING FILES *****
//_______________________________________________

if (fs.existsSync('./deleteme.txt')) {
  fs.unlink('./Docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
