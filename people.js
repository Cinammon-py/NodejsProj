const people = ['yonshi', 'ryu', 'chun li', 'mario'];
const ages = [23, 45, 33, 54, 65];

// sending the value to xyz
module.exports = people;

// exporting multiple data usign the module.exports method
module.exports = {
  people,
  ages,
  // people: people,
  // ages: ages
};
