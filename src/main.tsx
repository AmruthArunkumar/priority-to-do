import { render } from "preact";
import "./index.css";
import AddBar from "./components/AddBar";
import ListView from "./components/ListView";
import StatusBar from "./components/StatusBar";

export default function App() {
    return <div>
        <AddBar></AddBar>
        <StatusBar></StatusBar>
        <ListView></ListView>
    </div>;
}

render(<App />, document.querySelector("div#app") as Element);
