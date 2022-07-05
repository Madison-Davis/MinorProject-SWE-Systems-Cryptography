// Variables

function hashEncryption (string) {
    var hash = 0;
    if (string.length == 0) {
        return hash;
    }

    for (i = 0; i < string.length; i++) {
    ch = string.charCodeAt(i); // return UTF-16 value based on the value at this particular index
    hash = (hash * 31) + ch; // shift the data 5 bits to left and then add new character bits
    hash = hash & hash; // perform logical AND on these two numbers when reprsented in binary format
    return hash;
    }
}
    // string that has to create hashcode
var text = "This is my piece of text to encrypt!"
var output = hashEncryption(text);
console.log(text);
console.log(output);