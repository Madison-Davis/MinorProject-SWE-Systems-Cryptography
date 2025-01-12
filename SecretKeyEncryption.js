/* Notes:
Crypto Algorithm Types: DES, DESx2, DESx3, AES
Salt: random data added to the key to make it harder to hack into
Password: the key with random values in its name can be opened by this password
Initialization Vector: a message to temporarily hold/encrypt for the Cipher object 
scryptSync(): the process of making a password-protected key, the key will protect a message
createCipheriv(): making a Cipher object
*/

// Variables
const crypto = require('crypto');
const alg = `aes-192-cbc`;
const password = `Wolfpack2302`;
const salt = 'salt'; // 
const lengthOfKey = 24;
const shared_key = crypto.scryptSync(password,salt,lengthOfKey);
console.log("Key:", shared_key);
const initializationVector = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(alg,shared_key,initializationVector);
let cipher_text;
const decipher = crypto.createDecipheriv(alg,shared_key,initializationVector);

// Functions
function Encryption() {
    const message = "This is my secret message!";
    cipher.on('readable', () => {
        let _cipher_text = cipher.read();
        if(_cipher_text) {
            cipher_text = _cipher_text.toString('hex');
            console.log("Encrypted Message:", cipher_text);
        };
    });
    cipher.write(message);
    cipher.end();   
};

function Decryption(){
    decipher.on('readable', () => {
        let _plain_text = decipher.read();
        if(_plain_text) {
            console.log("Message:", _plain_text.toString('utf8'));
        };
    });
    decipher.write(cipher_text,'hex');
    decipher.end();
}

Encryption();
Decryption();