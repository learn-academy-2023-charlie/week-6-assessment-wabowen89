// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Pseudo Code:
  // Input: Array of Objects
  // Output: Array of Strings
  // Process:
    // Function Name: createSent
    // Assign parameter name 'array' to the function
    // Iterate through the array (possible tool: .map())
      // Create temporary array 'tempArr' and assign it name values as its own array (possible tool: .split())
      // Iterate through 'tempArr' (possible tool: for loop)
        // Change first letter to uppercase (possible tool: .charAt(), .toUpperCase(), and .slice())
      // Assign 'tempArr' value to current 'array' value.name values
    // Iterate through the array again (possible tool: .map())
      // Return an array of sentences with the object values (possible tool: string interpolation)
  // Expected Output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe ("createSent", () => {

  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(createSent(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
  })
  
// Good failure due to createSent not defined
// FAIL  ./challenges.test.js
// createSent
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// ● createSent › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: createSent is not defined

// b) Create the function that makes the test pass.

// const createSent = (array) => {

//   // Iterates through the array
//   array.map(value => {

//     // Assigns current value's name values to tempArr
//     let tempArr = value.name.split(" ")

//     // Iterates through tempArry
//     for (let i = 0; i < tempArr.length; i++) {

//       // Changes first letter to a capital
//       tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1)
//     }

//     // Replaces current value's name values with the new uppercased ones in 'tempArr'
//     value.name = tempArr.join(" ")

//   })

//   // Iterates through the given array again
//   return array.map(value => {

//     // Returns the requested sentence
//     return `${value.name} is ${value.occupation}.`

//   })
// }

// Success 
// PASS  ./challenges.test.js
  // createSent
  // ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
  
  
// Refactor 1
// Pseudo Code:
  // Process:
    // Remove temporary array
    // Remove nested for loop
    // Use value.name to access 'name' key values
    // Append .split() to create new array
    // Append .map to iterate over newly created array
      // Return the names with uppercased first letters in a sentence
  // Expected Output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

const createSent = (array) => {

  // Iterates through given array
  return array.map(value => {

    // .name accessess 'name' field of each object in array
    // .split() creates array of the 'name' field
    // .map() iterates through that array
    return value.name.split(" ").map(value => 

      // .charAt & .toUpperCase uppercase the first letter in each word
      // .slice appends the rest of the word to the uppercased letter
      // .join returns array to original single string
      value.charAt(0).toUpperCase() + value.slice(1)).join(" ") + " is " + value.occupation + "."
  })
}

  
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  
  // a) Create a test with an expect statement using the variables provided.
  
  // Pseudo Code:
    // Input: Mixed array
    // Output: Array with only remaineders of numbers
    // Process:
      // Function Name: remainGen
      // Assign parameter name 'array' to the function
      // Create temporary array 'tempArr'
      // Iterate through the array (possible tool: .filter())
        // Check current value for integer data type (possible tool: conditionals)
        // Assign resulting array to 'tempArr'
      // Iterate through 'tempArr' (possible tool: .map())
        // Find remainder of each value when divided by 3 (possible tool: modulo operator)
    // Expected Output: [ 2, 0, -1, 0 ]
                     // [ 2, 1, -1 ]
  
  
  describe("remainGen", () => {
  
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
  
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      expect(remainGen(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainGen(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
  })
  
  // Good failure to due remainGen() not defined
  // FAIL  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
  // remainGen
  //   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
  
  // ● remainGen › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  
  //   ReferenceError: remainGen is not defined
  
  // b) Create the function that makes the test pass.
  
  // const remainGen = (array) => {
  
  //   let tempArr = []
  
  //   // Iterates through the array
  //   // If the datatype of the current value is number, it is added to the array
  //   // .filters array is assigned to 'tempArr'
  //   tempArr = array.filter(value => typeof value === "number")
  
  //   // Iterates through 'tempArr'
  //   // Returns the remainder of all values
  //   return tempArr.map(value => value % 3)
  
  // }
  
  // Success
  // PASS  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // remainGen
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  
  // Refactor 1
  // Refactor 
  // Pseudo Code:
    // Process:
      // Remove separate 'tempArr' variable creation
    // Expected Output: [ 2, 0, -1, 0 ]
                     // [ 2, 1, -1 ]
  
  // const remainGen = (array) => {
  
  //   // Iterates through the array
  //   // If the datatype of the current value is number, it is added to the array
  //   // .filters array is assigned to 'tempArr'
  //   let tempArr = array.filter(value => typeof value === "number")
  
  //   // Iterates through 'tempArr'
  //   // Returns the remainder of all values
  //   return tempArr.map(value => value % 3)
  
  // }
  
  // Success
  // PASS  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // remainGen
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  
  // Test Suites: 1 passed, 1 total
  
  // Refactor 2
  // Refactor 
  // Pseudo Code:
    // Process:
      // Chain .filter and .map together
    // Expected Output: [ 2, 0, -1, 0 ]
                     // [ 2, 1, -1 ]
  
  const remainGen = (array) => {
  
    // Chain the .filter and .map methods together
    return array.filter(value => typeof value === "number").map(value => value % 3)
  
  }
  
  // Success
  // PASS  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // remainGen
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  
  
  // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
  
  // a) Create a test with an expect statement using the variables provided.
  
  // Pseudo Code:
    // Input: Array
    // Output: Number
    // Process:
      // Function Name: cubedSum 
      // Assign parameter name 'array' to the function
      // Create temporary number 'tempNum'
      // Iterate through the array (possible tool: .map)
        // Cube the current value
        // Add the cubed current value to the temporary number
      // Return the final count
    // Expected Output: 99
                     // 1125
  
  
  describe("cubedSum", () => {
    
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    
    it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      expect(cubedSum(cubeAndSum1)).toEqual(99)
      expect(cubedSum(cubeAndSum2)).toEqual(1125)
    })
  })
  
  // Good failure to due cubedSum() not defined
  // FAIL  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // remainGen
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
  // cubedSum
  //   ✕ takes in an array of numbers and returns the sum of all the numbers cubed.
  
  // ● cubedSum › takes in an array of numbers and returns the sum of all the numbers cubed.
  
  //   ReferenceError: cubedSum is not defined
  
  // b) Create the function that makes the test pass.
  
  // const cubedSum = (array) => {
  
  //   let tempNum = 0
  
  //   // Iterates through 'array'
  //   array.map(value => {
  //     // Computes the current value to the power of 3
  //     // Add the resulting value to 'tempNum'
  //     tempNum += Math.pow(value, 3)
  //   })
  
  //   return tempNum
  
  // }
  
  // Success
  // PASS  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // remainGen
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
  // cubedSum
  //   ✓ takes in an array of numbers and returns the sum of all the numbers cubed.
  
  // Refactor 
  // Refactor 
  // Pseudo Code:
    // Process:
      // Remove 'tempNum'
      // Remove .map
      // Iterate through the array with .reduce()
      // Add the values to the power of 3
    // Expected Output: 99
                     // 1125
  
  const cubedSum = (array) => {
  
    // Iterate through the array with .reduce()
      // 'a' is the accumulated value
      // 'b' is the next number to be added
    // Set initialized accumulated value to 0
    // Adds 'a' to Math.pow function
    return array.reduce((a,b) => a + Math.pow(b, 3), 0)
  
  }
  
  // Success
  // PASS  ./challenges.test.js
  // createSent
  //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // remainGen
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  // cubedSum
  //   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)