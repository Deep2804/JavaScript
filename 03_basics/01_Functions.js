
function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
    
}

//sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNum(3,4)
// addTwoNum(3,"4")
// addTwoNum(3,"a")
// addTwoNum(3,null)

function addTwoNum(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNum(3,5)
// console.log("Result:",result);

function loginUserMessage(username = "singh"){
    if(!username){
        console.log("Please Enter a Username");
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("deepak"))
// console.log(loginUserMessage("deepak"))

function CalculateCartPrice(val1,va2,...num1){
    return num1
}
// console.log(CalculateCartPrice(200,300,400,500,600));

const user = {
    username : "deepak",
    prices : "100"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
     username: "deep",
     price: 200
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
         return getArray[1] 
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));

