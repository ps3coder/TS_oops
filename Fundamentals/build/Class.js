"use strict";
class Task {
    constructor(taskInfo) {
        this.id = taskInfo.id;
        this.title = taskInfo.title;
        this.description = taskInfo.description;
        this.dueDate = taskInfo.dueDate;
        this.completed = false;
    }
    complete() {
        this.completed = true;
    }
    incomplete() {
        this.completed = false;
    }
}
const task1 = new Task({
    id: 1,
    title: "Finish Report",
    description: "Buy milk , eggs and bread",
    dueDate: new Date("2077-11-17"),
});
const task2 = new Task({
    id: 1,
    title: "Finish Report",
    description: "Buy milk , eggs and bread",
    dueDate: new Date("2077-11-17"),
});
task1.complete();
console.log(task1);
console.log(task2);
