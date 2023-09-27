import { useState } from "react";

export const FirstApp_Challenge11 = () => {
    const [categories, setCategories] = useState(['Category']);
    const [category, setCategory] = useState('');

    const OnAddCategory = () => {
        setCategories(list => [...list, category]);
        setCategory('');
    }

    const OnSetCategory = (evt) => {
        setCategory(evt.target.value);
    }

    return (
        <>
        <h1>GifExpert</h1>
        <input type="text" value={category} 
        onChange={(event) => OnSetCategory(event) } />
        <button onClick={() => OnAddCategory()}> Agregar </button>
        <ol>
            {
                categories.map(
                    (category, key) =>
                    {
                     <li key={key}> {category} </li>
                    }
                )
            }
        </ol> 
        </>
    )

}
export default FirstApp_Challenge11;
