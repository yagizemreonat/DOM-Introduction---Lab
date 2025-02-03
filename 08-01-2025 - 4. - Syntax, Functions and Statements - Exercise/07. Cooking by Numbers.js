function cookingByNumbers(num, comand1, comand2, comand3, comand4, comand5) {
    
    let result = [];
    let array = [comand1, comand2, comand3, comand4, comand5];
   
    let number = Number(num);

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case "chop":
                number = number /2;
                result.push(Number(number.toFixed(1)));
                break; 
            case "dice":
                number = Math.sqrt(number); 
                result.push(Number(number.toFixed(1)));
                break; 
            case "spice":
                number += 1;
                result.push(Number(number.toFixed(1)));
                break; 
            case "bake":
                number *= 3;
                result.push(Number(number.toFixed(1)));
                break; 
            case "fillet":
                number *= 0.8
                result.push(Number(number.toFixed(1)));
                break; 
        
            default:
                console.log("Invalid");
                break;
        }
    }
    console.log(result.join('\n'));
    
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// Cooking by Numbers

// Write a program that receives 6 parameters which are a number and a list of five operations. 
// Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. 
// Print the result of every operation in order. The operations can be one of the following:

// · chop - divide the number by two
// · dice - square root of a number
// · spice - add 1 to the number
// · bake - multiply number by 3
// · fillet - subtract 20% from the number

// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. 
// The remaining 5 elements are the names of the operations to be performed.

// The output should be printed on the console.

// Input                                                   Output
// '32', 'chop', 'chop', 'chop', 'chop', 'chop'            16 8 4 2 1
// '9', 'dice', 'spice', 'chop', 'bake', 'fillet'          3 4 2 6 4.8