import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { useSelector } from "react-redux";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectDisplay } from "./redux/slices/displayCountriesSlice";

function App() {
    let potentials = useSelector(selectPotentials)
    let currentDisplay = useSelector(selectDisplay)
    console.log(potentials)
    console.log("DISPLAY", currentDisplay)

    return (
        <div className="App font-link">
            <Header />
            <OptionDisplay />
        </div>
    );
}

export default App;
