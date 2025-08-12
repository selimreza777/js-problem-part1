/**
 * function takes an array as parameter
 *  give me the average of the odd numbers in the array
*/
/**
 * put odd numbers in an array
 */

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      // console.log(number)
      odds.push(number);

    }
  }
  //odds is the array that contains only the odd numbers
  // console.log(odds)
  let sum =0;
  for(const number of odds){
    sum =sum+number;
  }
  const count = odds.length;
  console.log(sum,count)
  const avg=sum/count;
  return avg;
}
const numbers = [5, 2, 4, 3, 11, 9, 96, 7];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is: ', avg);