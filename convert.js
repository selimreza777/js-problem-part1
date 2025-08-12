function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
//ignore this one model
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
  return result;
}

const myHight = inchToFeet(64);
// console.log(myHight);
const myHight2 = inchToFeet2(75);
console.log(myHight2);