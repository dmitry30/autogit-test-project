# src/ — Модули приложения

## calculator.js

Математический калькулятор. Чистые функции без побочных эффектов.

```
Calculator
├── add(a, b) → a + b
├── subtract(a, b) → a - b
└── multiply(a, b) → a * b
```

При добавлении новых операций:
- Добавить метод в класс Calculator
- Добавить тесты в `tests/run.js` секция `// --- Calculator tests ---`
- Обновить этот файл

## tasks.js

Менеджер задач. Хранит задачи в массиве в памяти.

```
TaskManager
├── addTask(title) → index      // push + return length-1
├── completeTask(index) → void  // throws Error при невалидном индексе
├── getTasks() → Task[]         // возвращает копию (spread)
├── getPending() → Task[]       // filter(!completed)
├── getCompleted() → Task[]     // filter(completed)
└── getSummary() → string       // "X/Y completed"
```

Task: `{ title: string, completed: boolean, createdAt: Date }`

При добавлении новых методов:
- Добавить тесты в `tests/run.js` секция `// --- TaskManager tests ---`
- Обновить этот файл

## index.js

Точка входа. Только демонстрация — не содержит логики.
Импортирует Calculator и TaskManager, выводит примеры в консоль.
