/**
 * Array has some dupliate elements
 * []
*/

const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'vabul'];
const numbers = [1, 5, 3, 5, 24, 23, 43, 23];

function noDuplicate(array) {
  const uniq = [];
  for (const itme of array) {
    if (uniq.includes(itme) === false) {
      uniq.push(itme);
    }

  }
  return uniq;
}
const uniqArray = noDuplicate(numbers);
console.log(uniqArray);