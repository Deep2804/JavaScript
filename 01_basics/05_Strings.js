const name = "Javascript"
const repoCount = 50
// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('deepak-singh') 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(newString);

const newStringone = "  Deepak  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http://deepak.com/deepak%20singh"

console.log(url.replace('%20','-'));

console.log(url.includes('deepak'));

console.log(gameName.split('-'));