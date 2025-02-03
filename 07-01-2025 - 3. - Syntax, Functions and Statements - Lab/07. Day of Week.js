function getDayNumber(day) {
    switch (day) {
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        case 'Sunday':
            return 7;
        default:
            return 'error';
    }
}

// Example usage:
console.log(getDayNumber('Monday')); // Output: 1
console.log(getDayNumber('Friday')); // Output: 5
console.log(getDayNumber('Invalid')); // Output: error

// Day of Week

// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// The input comes as a single-string argument.
// The output should be returned as a result.

// Input           Output
// 'Monday'        1
// 'Friday'        5
// 'Invalid'       error