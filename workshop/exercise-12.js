// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
let gradeArray = [48, 95, 65, 48, 59, 78, 72, 65];
let gradeArray2 = [58, 65, 60, 82, 74, 4, 50, 51, 48, 95, 27, 92, 100];

function gradeConverter(arr) {
  const gradeChecker = (grade) => {
    if (grade < 60) {
      return (grade = "F");
    } else if (grade >= 60 && grade < 70) {
      return (grade = "D");
    } else if (grade > 70 && grade < 80) {
      return (grade = "C");
    } else if (grade > 80 && grade < 90) {
      return (grade = "B");
    } else if (grade > 90 && grade <= 100) {
      return (grade = "A");
    } else return grade;
  };
  return arr.map(gradeChecker);
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(gradeConverter(gradeArray));
// Try with other values as well
console.log(gradeConverter(gradeArray2));
