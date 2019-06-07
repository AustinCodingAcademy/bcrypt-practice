var bcrypt = require('bcryptjs');

let passwordEnteredByUser = "P@ssword12345!!!!";
let passwordSavedInDatabase = "P@ssword12345!!!!";


var hash = bcrypt.hashSync(passwordEnteredByUser, 8);
console.log(hash);
passwordSavedInDatabase = hash;


return;













console.log(passwordEnteredByUser === passwordSavedInDatabase);













//console.log(bcrypt.compareSync(passwordEnteredByUser, hash));

return;

















let scrambledPassword = hash(passwordEnteredByUser);
passwordSavedInDatabase = scrambledPassword;
console.log(passwordSavedInDatabase);

function hash(word){
    let hashedWord = "";
    for(let i =0; i < passwordEnteredByUser.length; i++){
        let letter = passwordEnteredByUser[i];
        let charCode = letter.charCodeAt(0);
        charCode = charCode + i; //this is the secret key, add i, we could have choose to add anything
        letter = String.fromCharCode(charCode);
        hashedWord += letter;
      
      }
      return hashedWord;
}



let originalPassword = unhash(passwordSavedInDatabase);
console.log(originalPassword);
function unhash(hash)
{
    let originalWord = ""
    for(let i =0; i < passwordSavedInDatabase.length; i++){
        let letter = passwordSavedInDatabase[i];
        let charCode = letter.charCodeAt(0);
        charCode = charCode - i;
        letter = String.fromCharCode(charCode);
        originalWord += letter;
    
    }
    return originalWord;
}
