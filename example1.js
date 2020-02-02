//let userInput = document.getElementById("ex1input").value;
let userOutput = document.getElementById("ex1output");
let clicked = document.getElementById("ex1click");

let newArray = [];

//get input from user change into an array
clicked.addEventListener("click", function(){
    let userInput = document.getElementById("ex1input");
    let array = userInput.value.split(',');

    newArray = arrayCopy(array);
    arraySort(newArray);
    userOutput.innerHTML = `[${arrayOrg(newArray)}]`;
})

///////////////////////////////
console.log("-.^")

//create copy of array
const arrayCopy = (array => {
    return array.slice();
})

//order the array lowest to highest
const arraySort =(array => {
    return array.sort((a,b) => a - b);
})


//compare and find, when un-equal number is found
//store found numbers in an aray
const arrayOrg = (array => {
    let tempArray = [];
    let bigArray = [];
    let count = 0;

    array.map((value, index) => {
        
        for (i=count; i < array.length + 1; i++){
            if(value === array[i]){
                tempArray.push(array[i]);
            }else{
                if(tempArray.length <= 0){
                    count = i;
                    return;
                }else if(tempArray.length === 1){
                    count = i;
                    bigArray.push(value);
                    tempArray = [];
                    return;
                }else{
                    count = i;
                    bigArray.push(tempArray);
                    tempArray = [];
                    return;
                }
            }
        }
    })
    console.log(bigArray);
    return (bigArray);
})