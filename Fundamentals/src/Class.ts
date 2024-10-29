
interface TaskInfo {
    id: number,
    title: string,
    description: string,
    dueDate: Date
}

class Task {

    private id: number;
    private title: string;
    private description: string;
    private dueDate: Date;
    private completed: boolean;


    constructor(taskInfo: TaskInfo) {
        this.id = taskInfo.id;
        this.title = taskInfo.title;
        this.description = taskInfo.description;
        this.dueDate = taskInfo.dueDate;
        this.completed = false;
    }

    public complete() {
        this.completed = true;
    }
    public incomplete() {
        this.completed = false
    }
}


const task1 = new Task({
    id: 1,
    title: "Finish Report",
    description: "Buy milk , eggs and bread",
    dueDate: new Date("2077-11-17"),
})
const task2 = new Task({
    id: 1,
    title: "Finish Report",
    description: "Buy milk , eggs and bread",
    dueDate: new Date("2077-11-17"),
})

task1.complete()

console.log(task1)
console.log(task2)