/**
 * Problem: Validate Parentheses
 * Approach: Stack Data Structure (LIFO - Last In, First Out)
 * * Description:
 * Iterates through the string to ensure every opening bracket "(" 
 * has a corresponding closing bracket ")" in the correct order.
 * * Time Complexity: O(n) - We traverse the string exactly once.
 * Space Complexity: O(n) - In the worst case (all open brackets), the stack holds n characters.
 */
let myArray = []
// Example String 
let stringy = "(()09))(())("
for (let i = 0; i < (stringy.length); i++) {
    if(stringy.charAt(i) === "(") {
        myArray.push("(")
        console.log(myArray)
    }
    else if (myArray.length === 0) {
        myArray.push(")")
        break
    }
    else if (stringy.charAt(i) === ")") {  
        myArray.pop()
        console.log(myArray)
    } 
}
if (myArray.length) {
    console.log("Unmatched")    
}
else {
    console.log("Matched")
}

console.log(myArray)
