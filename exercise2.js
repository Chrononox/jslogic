let ex2clicked = document.getElementById("ex2click");
let ex2Output = document.getElementById("ex2output");

const findMath = ((arr, num) => {
    let answer = '';
    let found = false;
    arr.map((item, index) => {
        for(i=0; i < arr.length; i++) {
            
            if ((item + arr[i]) === num && i !== index && !found){
                answer = `${item} + ${arr[i]} = ${num}`
                found = !found;
            }
        }
    })
    return answer;
})

//get user input return answer
ex2clicked.addEventListener("click", function() {
    let userInput = document.getElementById("ex2input");
    let userSum = document.getElementById("ex2sum");

    let array = userInput.value.split(',');
    let newArray = findMath(array, userSum);

    ex2Output.innerHTML = `[${newArray}]`;
})