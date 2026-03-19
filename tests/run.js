const { Calculator } = require('../src/calculator');
const { TaskManager } = require('../src/tasks');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ ${message}`);
  }
}

// --- Calculator tests ---
console.log('\nCalculator:');

const calc = new Calculator();
assert(calc.add(2, 3) === 5, 'add(2, 3) === 5');
assert(calc.add(-1, 1) === 0, 'add(-1, 1) === 0');
assert(calc.subtract(10, 4) === 6, 'subtract(10, 4) === 6');
assert(calc.multiply(6, 7) === 42, 'multiply(6, 7) === 42');
assert(calc.multiply(0, 100) === 0, 'multiply(0, 100) === 0');

// --- TaskManager tests ---
console.log('\nTaskManager:');

const tm = new TaskManager();
const id0 = tm.addTask('Task A');
const id1 = tm.addTask('Task B');
assert(id0 === 0, 'first task id is 0');
assert(id1 === 1, 'second task id is 1');
assert(tm.getTasks().length === 2, 'getTasks() returns 2');
assert(tm.getPending().length === 2, 'all pending initially');

tm.completeTask(0);
assert(tm.getCompleted().length === 1, '1 completed after completeTask(0)');
assert(tm.getPending().length === 1, '1 pending after completeTask(0)');
assert(tm.getSummary() === '1/2 completed', 'summary is correct');

try {
  tm.completeTask(99);
  assert(false, 'completeTask(99) should throw');
} catch (e) {
  assert(true, 'completeTask(99) throws on invalid index');
}

// --- Results ---
console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
