// Code your solutions in this file

function printBadges(employees) {
  for (let employee_count = 0; employee_count < employees.length; employee_count++) {
    console.log(`Welcome ${employees[employee_count]}! You are employee #${employee_count + 1}.`);
  }
  return employees;
}

function tailsCoinFlip() {
  return Math.random() >= 0.2;
}

function tailsNeverFails() {
  while (tailsCoinFlip()) {
  console.log(`You got ${tails_count} tails in a row!`);
  }
}
