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
// console.log(myHight2);


// miles to kilometer 
// 1 mile = 1.60934 km 
// write a code 
function mileTokilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const result = mileTokilometer(10);
// console.log(result);

// kilomete to miles 
// 1 kilo = 0.621371
// write a code 
function kiloToMiles(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
const result2 = kiloToMiles(20);
console.log(result2);