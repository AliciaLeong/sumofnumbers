const listOfNum = [1, 2, 3];

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log('test for loop');
console.log(sumFor(listOfNum));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log('test while loop');
console.log(sumWhile(listOfNum));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log('test recursion');
console.log(sumRecursion(listOfNum));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, sum) { return memo + sum; }, 0);
}
console.log('Test using Underscore');
console.log(sumTheSimpleWay(listOfNum));
