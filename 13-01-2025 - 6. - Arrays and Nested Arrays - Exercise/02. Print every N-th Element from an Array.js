function printEveryNthElement(array, step) { 
    let result = [];
 
    for (let i = 0; i < array.length; i ++) { 
        if (i % step === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
 
console.log(printEveryNthElement(['5', '20', '31', '4', '20'], 2));  
console.log(printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2));  
console.log(printEveryNthElement(['1', '2', '3', '4', '5'], 6));  



// Print Every N-th Element from an Array

// The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.

// The output is every element on the N-th step starting from the first one. 
// If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array.

// The output is the return value of your function and must be an array.

// Input                                   Output
// ['5','20','31','4','20'],2              ['5', '31', '20'] 
// ['dsa', 'asd', 'test', 'tset'], 2       ['dsa', 'test'] 
// ['1', '2', '3', '4', '5'], 6            ['1']

// Hints
// · Return all the elements with for loop, incrementing the loop variable with the value of the step variable.