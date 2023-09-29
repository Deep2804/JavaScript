
// var c = 300
let a = 100
if (true){
    let a = 10
    const b = 20
    //  c = 30 
    // console.log("Inner",a);
    // function addnum(){

    // }
}


//  console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const userName = "deepak"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

     two()


}
//one()

if (true) {
    const username = "deepak"
    if (username == "deepak") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

addone(5)
console.log(addone(5))
function addone(num){
       return num+1
}

addTwo(5)

const addTwo = function(num){
    return num + 2

}

