import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Zodiac']);


    const OnAddCategory = (category) => {
        setCategories(list => [...list, category]);
    }


    return (
        <>
        <h1>GifExpert</h1>

        <AddCategory OnAddCategory={OnAddCategory} />
        {
            categories.map(
                (category, key) =>
                {
                 <GifGrid key={key} category={category} />
                }
            )
        }
        </>
    )
}    
export default GifExpertApp;