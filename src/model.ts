import { signal } from "@preact/signals";
import { Task } from "./task";

export const list = signal<Task[]>([
    new Task("a task", 1),
    new Task("another task", 2),
    new Task("other task", 4),
    new Task("long task", 5),
    new Task("short task", 12)
]);

export function addToList(task: Task) {
    list.value = [...list.value, task];
    console.log(list.value);
}

export function removeFromList(task: Task) {
    list.value = list.value.filter((c) => c.priority != task.priority);
}

export function getMissing() {
    const max: number = list.value.length ? list.value.sort((a, b) => a.priority - b.priority)[list.value.length - 1].priority : 0
    let missing: number[] = [];
    let curr: number = 0;
    const sorted: number[] = list.value.map((c) => c.priority).sort((a, b) => a - b);
    for (let i: number = 1; i <= max; i++) {
        if (i == sorted[curr]) {
            curr++;
        } else {
            missing.push(i);
        }
    }
    return missing.length ? missing : ["None"]
}

export function isDuplicate(priority: number) {
    return list.value.find((c) => c.priority == priority) ? true : false;
}
