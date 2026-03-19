# Report: Add math methods (power, sqrt, modulo) to Calculator

Branch: feature/3-add-math-methods
Date: 2026-03-20

## What was done
- Added `power(base, exponent)` method to Calculator class
- Added `sqrt(n)` method to Calculator class with negative-number guard
- Added `modulo(a, b)` method to Calculator class with division-by-zero guard
- Added corresponding tests in tests/run.js under section comment `// --- Calculator power/sqrt/modulo tests ---`

## Changed files
- src/calculator.js — added power, sqrt, modulo methods
- tests/run.js — added 8 new tests for power, sqrt, and modulo

## New dependencies
- None

## Tests
- power(2, 3) === 8
- power(5, 0) === 1
- sqrt(9) === 3
- sqrt(0) === 0
- sqrt(-1) throws 'Cannot take sqrt of negative number'
- modulo(10, 3) === 1
- modulo(10, 2) === 0
- modulo(5, 0) throws 'Division by zero'

Test run results: 24 passed, 0 failed (8 new + 16 existing)

## Architectural decisions
- Used `**` operator for power (ES2016, consistent with the existing codebase style)
- Used `Math.sqrt` for sqrt (standard, no external deps)
- Error messages follow the existing pattern from `divide` ('Division by zero')

## Discovered issues
- The `divide` method from branch `feature/2-add-divide-method` was already merged into this branch — no implicit dependency issue.

## Impact on other modules
- No other modules are affected. Changes are isolated to Calculator class and its tests.
