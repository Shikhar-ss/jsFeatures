//////////////////////////SET_TIMEOUT()///////////////////////
let cuedString = "Cued text 1"
var isCalledOnce = false;

function giveName (name){
    if (!isCalledOnce) {
        isCalledOnce = true;
        console.log("First name to arrive is : ",name)
    } else {
        console.log("Name already exists: ",)
    }
}

// setTimeout(() => {
//     console.log(cuedString)
    
//     setTimeout(()=>{
//         console.log("Cued text 2")
//         giveName("A");
//     },3000)

//     setTimeout(()=>{
//         console.log("Cued text 3")
//         giveName("B")
//     },3000)
// }, 1000);

// console.log("This text will come first!!!")

////////////////////////SET_INTERVAL()///////////////////
let count = 0;

// var t = setInterval(() => {
//     increaseCount()
// }, 3000);

let increaseCount = () => {
    count++ ;
    if (count > 3)  {
        clearInterval(t)
        console.log("TIME IS UP!!!")
        console.log("TIMER_ID: ",t._id)
    }
    return console.log("COUNT_IS_: ",count) 
}

// setImmediate(()=>{
//     console.log("Call me first after event loop finishes calling from the event callback stack ")
// })
