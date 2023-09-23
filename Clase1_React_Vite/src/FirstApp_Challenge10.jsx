import { useState } from "react";
import './App.css';

function FirstApp_Challenge10() {
    const [counter, setCounter] = useState(0);

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

return (
    <>
        <h1> Contador: { counter } </h1>
        <button onClick={() => setCounter(counter + 1)}> +1 </button>
        <button onClick={handleSubstract}> Restar -1 </button>
        <button onClick={handleReset}> Restaurar </button>
    </>
    )
}

export default FirstApp_Challenge10;