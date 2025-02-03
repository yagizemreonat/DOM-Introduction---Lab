function validityChecker(x1, y1, x2, y2) {
    
    let result = function (x1, y1, x2, y2){
        let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        if (Number.isInteger(distance)) {
            // valid
            // console.log(distance);
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            // invalid
            // console.log(distance);
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    result (x1, y1, 0, 0);
    result (x2, y2, 0, 0);
    result (x1, y1, x2, y2);
}

validityChecker (3, 0, 0, 4);
validityChecker(    );
validityChecker (2, 1, 1, 1);


// Validity Checker

// Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. 
// Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. 
// A distance between two points is considered valid if it is an integer value.
// Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
// In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`
// If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
// The input consists of two points given as 4 numbers.
// For each comparison print either `{x1, y1} to {x2, y2} is valid` if the distance is valid, or `{x1, y1} to {x2, y2} is invalid` if it is invalid.
 
// Input               Output
// 3, 0, 0, 4          {3, 0} to {0, 0} is valid 
//                     {0, 4} to {0, 0} is valid 
//                     {3, 0} to {0, 4} is valid

// 2, 1, 1, 1          {2, 1} to {0, 0} is invalid 
//                     {1, 1} to {0, 0} is invalid 
//                     {2, 1} to {1, 1} is valid