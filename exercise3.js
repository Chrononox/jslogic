// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
console.log('------------exercise2.js----------------')
//input from user
//display on page

//each val is a third of the rgb or hex, input is (for now) what you want back, //hex or rgb
const takeValues = ((val1, val2, val3, input) => {
    if (input.toLower() === 'hex'){

    }else if(input.toLower() === 'rgb'){

    }else{
        console.log('X.X please enter hex or rgb');
    }
})

const converter = ((input) => {
    
    //decide if hex or rgb    
    //swap
    console.log(hexConvert(input));
    console.log(rgbConvert(input));
    //display
})

//input hex return rgb
const hexConvert = ((hex) => {
//parseInt("ff", 16) ~ convert hex to num
return parseInt(hex, 16);
})

//input rgb return hex
const rgbConvert  =((rgb) => {
//toString(16)~ converts num to hex string
return rgb.toString(16);
})