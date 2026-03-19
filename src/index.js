const { Calculator } = require('./calculator');
const { TaskManager } = require('./tasks');

console.log('=== AutoGit Test Project ===');

// Calculator demo
const calc = new Calculator();
console.log(`2 + 3 = ${calc.add(2, 3)}`);
console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
console.log(`6 * 7 = ${calc.multiply(6, 7)}`);

// Task manager demo
const tm = new TaskManager();
tm.addTask('Buy groceries');
tm.addTask('Write code');
tm.addTask('Read a book');
tm.completeTask(0);
console.log(`\nTasks: ${tm.getSummary()}`);
