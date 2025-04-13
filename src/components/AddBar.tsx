import { addToList, isDuplicate } from "../model";
import { Task } from "../task";
import { useSignal } from "@preact/signals";

export default function AddBar() {
    const name = useSignal("");
    const priority = useSignal(1);

    function reset() {
        name.value = ""
        priority.value = 1
    }

    return (
        <div class="add-bar">
            <input
                value={name.value}
                onInput={(event) => {
                    name.value = event.currentTarget.value;
                }}
            />
            <input
                value={priority.value}
                class="priority-input"
                type="number"
                min={1}
                step={1}
                onInput={(event) => {
                    priority.value = parseInt(event.currentTarget.value);
                }}
            />
            <button
                disabled={isDuplicate(priority.value) || name.value == ""}
                onClick={() => {
                    addToList(new Task(name.value, priority.value));
                    reset()
                }}
            >
                ➕
            </button>
        </div>
    );
}
