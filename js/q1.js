let num1 = Number(prompt("Number 1: "));
let num2 = Number(prompt("Number 2: "));

if ((num1 < 0) || (num2 < 0)) {
  console.log("need a positive number, refresh the page");
};
if (num1>num2) {
  console.log("the first number should be less than the second, refresh");
}

const numbers = [];
for (i = num1; i <= num2; i++) {
  numbers.push(i);
}

//checking the array
console.log(numbers)

//trying whatever I can
function addAll() {
  forEach(number => {
    if (number % 3 !== 1 || number % 5 !== 1) {
      const arraySum = numbers.reduce((sum, num) => sum + num, 0);
      console.log(arraySum);
    };
  });
  return (numbers);
}

//and another one
numbers.forEach(number => {
  if (number % 3 === 1 || number % 5 === 1) {
    const arraySum = numbers.reduce((sum, num) => sum + num, 0);
    console.log(arraySum);
  };
});
console.log(numbers)

//still trying
const arraySum = numbers.filter(num => num % 3 === 1|| num % 5 === 1).reduce((sum, num) => sum + num, 0);
console.log(arraySum);