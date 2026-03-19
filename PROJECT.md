# PROJECT.md — Техническая карта проекта

## Общее описание

Тестовый проект для системы AUTOGIT. Node.js приложение с двумя модулями: математический калькулятор и менеджер задач.

**Стек:** Node.js, CommonJS modules, без фреймворков
**Тесты:** Собственный test runner (`tests/run.js`), запуск: `npm test`
**CI:** GitHub Actions (`.github/workflows/test.yml`)

## Структура проекта

```
autogit-test-project/
├── src/
│   ├── calculator.js      # Класс Calculator — математические операции
│   ├── tasks.js            # Класс TaskManager — управление задачами
│   └── index.js            # Точка входа — демонстрация модулей
├── tests/
│   └── run.js              # Тест-раннер, все тесты проекта
├── reports/                # Отчёты Worker'ов (создаётся автоматически)
├── CLAUDE.md               # Правила работы для AI-разработчиков
├── PROJECT.md              # Этот файл — техническая карта
└── package.json            # npm конфигурация
```

## Модули

### src/calculator.js — Calculator

```
class Calculator
├── add(a: number, b: number): number         — сложение
├── subtract(a: number, b: number): number     — вычитание
└── multiply(a: number, b: number): number     — умножение
```

Экспорт: `module.exports = { Calculator }`
Зависимости: нет

### src/tasks.js — TaskManager

```
class TaskManager
├── constructor()                              — this.tasks = []
├── addTask(title: string): number             — добавляет задачу, возвращает индекс
├── completeTask(index: number): void          — помечает задачу выполненной, throws при невалидном индексе
├── getTasks(): Task[]                         — копия массива задач
├── getPending(): Task[]                       — незавершённые задачи
├── getCompleted(): Task[]                     — завершённые задачи
└── getSummary(): string                       — "X/Y completed"
```

Формат Task: `{ title: string, completed: boolean, createdAt: Date }`
Экспорт: `module.exports = { TaskManager }`
Зависимости: нет

### src/index.js — Точка входа

Демонстрационный скрипт. Импортирует Calculator и TaskManager, выводит примеры использования.
Зависимости: `./calculator`, `./tasks`

## Тесты

### tests/run.js — Test runner

Собственная реализация тестов на `assert()`.
- Тесты Calculator: add, subtract, multiply (5 проверок)
- Тесты TaskManager: addTask, completeTask, getTasks, getPending, getCompleted, getSummary, ошибка на невалидном индексе (7 проверок)
- Exit code 1 при наличии failed тестов

## Конвенции

- CommonJS (`require` / `module.exports`)
- Классы — PascalCase
- Методы — camelCase
- Без TypeScript, без линтера
- Тесты в `tests/run.js`, добавляются секциями с комментарием `// --- ModuleName tests ---`
