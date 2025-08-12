/*
* year is divisible by 4 is this leap year
* those year that is not divisible 100,if the year is divisible   by 4:then it will be a leap year
* year is divisible 400 is this leap year

সংক্ষিপ্ত কথায়:
৪ দ্বারা বিভাজ্য + ১০০ দ্বারা বিভাজ্য নয় → লিপ ইয়ার

৪০০ দ্বারা বিভাজ্য → লিপ ইয়ার

১০০ দ্বারা বিভাজ্য কিন্তু ৪০০ দ্বারা নয় → লিপ ইয়ার নয়

সহজ কথায়:
১০০ দ্বারা বিভাজ্য কিন্তু ৪০০ দ্বারা বিভাজ্য না → লিপ ইয়ার নয়।

১০০ ও ৪০০ উভয় দ্বারা বিভাজ্য → লিপ ইয়ার।

*/


// function leapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
// }
// console.log(leapYear(1987));
// console.log(leapYear(1971));
// console.log(leapYear(1966));
// console.log(leapYear(1968));
// console.log(leapYear(2026));
// console.log(isLeapYear(2028));

// condition use and brif logic

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
}
const leap = isLeapYear(2043);
// console.log(leap);

function isLeapYear2(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  else if (year % 400 === 0 && year % 100 === 0) {
    return true;
  }
  else {
    return false;
  }

}
const leep1 = isLeapYear2(2100);
const leep2 = isLeapYear2(2400);
const leep3 = isLeapYear2(1900);
const leep4 = isLeapYear2(2052);
const leep5 = isLeapYear2(2036);
console.log(leep1, leep2, leep3, leep4, leep5);





