import { getMissing } from "../model";

export default function StatusBar() {
    return (
        <div class="status">
            Missing Priorities: {getMissing().join(", ")}
        </div>
    );
}
