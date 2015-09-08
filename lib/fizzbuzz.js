var fizzbuzz = function (num) {
  'use strict';
  var verdict = '';

  var fizzy = (num % 3 == 0);
  var buzzy = (num % 5 == 0);

  if(fizzy) verdict += 'Fizz';
  if(buzzy) verdict += 'Buzz';
  if(!verdict) verdict = num;

  return verdict;
};

// module.exports = fizzbuzz;
