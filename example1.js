console.log("-.^")

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, 49, 49, 49];
let newArray = [];

//get array from user


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
        
        for (i=count; i < array.length; i++){
            if(value === array[i]){
                tempArray.push(array[i]);
            }else{
                if(tempArray.length <= 0){
                    count = i;
                    return;
                }else if(tempArray.length === 1){
                    count = i;
                   
                    bigArray.push(value);
                    return;
                }else{
                    // debugger
                    count = i;
                    bigArray.push(tempArray);
                    tempArray = [];
                    return;
                }
                
            }
        }
    })
    console.log(bigArray);
})




//////////MAIN/////////

newArray = arrayCopy(array);
newArray = arraySort(newArray);
console.log(arrayOrg(newArray));
