const FirstApp_funtions = ({value}) => {

    const handleAdd = () => {
        console.log('calling handleAdd');
    }

    return (
        <>
            <h1> Counter </h1>
            <span> {value} </span>
            <button onClick={() => handleAdd()}> +1 </button>
        </>
    )
}

export default FirstApp_funtions