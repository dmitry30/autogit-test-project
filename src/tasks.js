class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    this.tasks.push({ title, completed: false, createdAt: new Date() });
    return this.tasks.length - 1;
  }

  completeTask(index) {
    if (index < 0 || index >= this.tasks.length) {
      throw new Error(`Task index ${index} out of range`);
    }
    this.tasks[index].completed = true;
  }

  getTasks() {
    return [...this.tasks];
  }

  getPending() {
    return this.tasks.filter(t => !t.completed);
  }

  getCompleted() {
    return this.tasks.filter(t => t.completed);
  }

  getSummary() {
    const done = this.getCompleted().length;
    const total = this.tasks.length;
    return `${done}/${total} completed`;
  }
}

module.exports = { TaskManager };
