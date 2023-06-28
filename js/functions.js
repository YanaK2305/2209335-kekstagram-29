function checkMaxLengthStr(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
console.log('Проверяемая строка', checkMaxLengthStr('Проверяемая строка', 20));
console.log('Проверяемая строка', checkMaxLengthStr('Проверяемая строка', 18));
console.log('Проверяемая строка', checkMaxLengthStr('Проверяемая строка', 10));


const isPalindrome = (str) => {
  const normalizeStr = str.toLowerCase().replaceAll(' ','');
  console.log(normalizeStr);
  console.log(normalizeStr.split(''));
  const reversedStr = normalizeStr.split('').reverse().join(' ');

  return normalizeStr === reversedStr;
};
console.log('isPalindrome');
console.log(isPalindrome('топот'));
console.log(isPalindrome('Довод'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл'));


const takeNum = (str) => {
  let result = '';
  for (const el of str.toString()) {
    if (!Number.isNaN(parseInt(el, 10))){
      result += el;
    }
  }
  return +result !== 0 ? +result : NaN;
};

console.log('takeNum');
console.log(takeNum('2023 год'));
console.log(takeNum('ECMAScript 2022'));
console.log(takeNum('1 кефир, 0.5 батона'));
console.log(takeNum('агент 007'));
console.log(takeNum('а я томат'));
console.log(takeNum(-1));

const timeTextToNumber = (text) => text.split(':').map((element) => parseInt(element, 10));
const getTimeInterval = (startTime, endTime) => (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1]);

const validateMeeting = (startWork, endWork, startMeeting, delayMeeting) => {
  const startWorkTime = timeTextToNumber(startWork);
  const endWorkTime = timeTextToNumber(endWork);
  const startMeetingTime = timeTextToNumber(startMeeting);
  const workDelay = getTimeInterval(startWorkTime, endWorkTime);
  const timeForMeeting = getTimeInterval(startMeetingTime, endWorkTime);
  if (delayMeeting > workDelay || timeForMeeting < delayMeeting || timeForMeeting > workDelay) {
    return false;
  }
  return true;
};

console.log('validateMeeting()', validateMeeting('08:00', '17:30', '14:00', 90));
console.log('validateMeeting()', validateMeeting('8:0', '10:0', '8:0', 120));
console.log('validateMeeting()', validateMeeting('08:00', '14:30', '14:00', 90));
console.log('validateMeeting()', validateMeeting('14:00', '17:30', '08:0', 90));
console.log('validateMeeting()', validateMeeting('8:00', '17:30', '08:00', 900));

