import { removeFromList } from "../model";
import { Task } from "../task";

type TaskProps = {
    task: Task;
};

export default function TaskEntry({ task }: TaskProps) {
    return (
        <div class="task-entry">
            <div>
                ({task.priority}) {task.name}
            </div>
            <button
                onClick={() => {
                    removeFromList(task);
                }}
            >
                x
            </button>
        </div>
    );
}
