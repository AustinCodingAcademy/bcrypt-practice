var bcrypt = require('bcryptjs');

let passwordEnteredByUser = "P@ssword12345!!!!";
let passwordSavedInDatabase = "P@ssword12345!!!!";


var hash = bcrypt.hashSync(passwordEnteredByUser, 8);
console.log(hash);
passwordSavedInDatabase = hash;

console.log(passwordEnteredByUser === passwordSavedInDatabase);


//console.log(bcrypt.compareSync(passwordEnteredByUser, hash));
