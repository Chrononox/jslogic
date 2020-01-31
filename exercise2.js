// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
console.log('------------exercise2.js----------------')
const findMath = ((arr, num) => {
    //iterate over arr twice and check the math is equal to num
    //return two numbers in own array(?) or retun 'no match found'
    let answer = '';
    let found = false;
    arr.map((item, index) => {
        for(i=0; i < arr.length; i++) {
            
            if ((item + arr[i]) === num && i !== index && !found){
                //console.log(`+.+`);
                answer = `${item} + ${arr[i]} = ${num}`
                found = !found;
            }
        }
    })
    return answer;
})

console.log(findMath([1,2,3,4,5],8))

//display on page
//get user input?