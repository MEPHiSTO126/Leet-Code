/**
 * Problem: Remove Duplicates from an Array
 * Approach: Auxiliary Array
 * * Description:
 * Iterates through the array to remove duplicate values,
 * maintaining the order of first occurrences.
 *  Time Complexity: O(n^2) - In the worst case, for each element, we may need to check all elements in the auxiliary array.
 * Space Complexity: O(n) - The auxiliary array may hold up to n elements in the worst case (all unique).
 */
let the_array = [1,2,3,3,4,4,5,5,6,7,8,8,9,9]
let charray = []
let i = 0
while ( the_array[i] != undefined) {
    if (charray[charray.length -1] != the_array[i]) {
        charray.push(the_array[i])
        i++
    }
    else {
        the_array.splice(the_array[i], 1) ;
    }
    console.log(the_array)
    console.log(charray)

}
//Shorter method using Set
// const set = new Set(the_array)
// the_array = [...set]
// console.log(the_array)
console.log(the_array)