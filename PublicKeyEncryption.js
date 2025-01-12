// Variables

const nacl = require('tweetnacl');
nacl.util = require('tweetnacl-util');
const person1 = nacl.box.keyPair();
const person2 = nacl.box.keyPair();

function Encryption(){
    const code = nacl.randomBytes(24);
    const message = "This is my secret message!";
    const cipher_text = nacl.box( // encrypt the text
        nacl.util.decodeUTF8(message),
        code,
        person2.publicKey,
        person1.secretKey
    );
    const send_message = { cipher_text, code };
    return send_message;
};


function Decryption(message){
    let decoded_message = nacl.box.open(message.cipher_text, message.code, person1.publicKey, person2.secretKey);
    let plain_text = nacl.util.encodeUTF8(decoded_message)
    return plain_text;
};

const encryption = Encryption();
console.log(encryption);
const decipheredMessage = Decryption(encryption);
console.log(decipheredMessage);