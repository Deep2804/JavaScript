//array
const myArr = [0,1,2,3,4,5]
const myHero = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[2]); 

//array methods
// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);

//slice , splice
console.log("A",myArr);

const mynewArr = myArr.slice(1,3)
console.log(mynewArr);
console.log("B",myArr);


const mynewArr2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(mynewArr2);
