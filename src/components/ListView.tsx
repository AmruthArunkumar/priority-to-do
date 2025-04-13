import { list } from "../model";
import TaskEntry from "./TaskEntry";

export default function ListView() {
    return (
        <div class="list-view">
            {list.value
                .sort((a, b) => a.priority - b.priority)
                .map((c) => {
                    return (
                        <TaskEntry task={c}></TaskEntry>
                    );
                })}
        </div>
    );
}
