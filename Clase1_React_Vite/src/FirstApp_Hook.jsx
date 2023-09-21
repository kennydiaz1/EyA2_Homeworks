import { useState } from "react";

const FirstApp_Hook = ({value}) => {
    
        const [counter, setCounter] = useState(value);
    
        const handleAdd = () => {
            setCounter(counter + 1);
        }
    
        return (
            <>
                <h1> Counter </h1>
                <span> {counter} </span>
                <button onClick={handleAdd}> +1 </button>
            </>
        )
    }
export default FirstApp_Hook