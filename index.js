// // function Monday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// // }

// // function Tuesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// // }
  
// // function Wednesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Go for a five-mile run");
// // }
  
// // function Thursday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// // }
  
// // function Friday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// // }

// // function runFiveMiles() {
// //     console.log("Go for a five-mile run");
// // }

// // function liftWeights() {
// //     console.log("Pump iron");
// // }

// // function swimFortyLaps() {
// //     console.log("Swim 40 laps");
// // }

// // function Monday() {
// //     runFiveMiles();
// //     liftWeights();
// // }

// // function exerciseRoutine(postRunActivity) {
// //     runFiveMiles();
// //     postRunActivity();
// // }

// // function Monday() {
// //     exerciseRoutine(liftWeights);
// // }

// // function exerciseRoutine(postRunActivity) {
// //     runFiveMiles();
// //     postRunActivity();
// // }

// // exerciseRoutine(() => console.log("Stretch! Work that core!"));

// function receivesAFunction(aFunction){
//     return aFunction();
// }

// // function returnsANamedFunction(namedFunction){
// //     namedFunction();
// // }

// // const returnsAnAnonymousFunction = (function()){
// //     return ("before all");
// 

// function receivesAFunction (callBack){
//     return callBack();
// }

const namedFunction = () => {}  
function returnsANamedFunction(){
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return () => {}
}

const receivesAFunction = (callBack) => {callBack()} 
