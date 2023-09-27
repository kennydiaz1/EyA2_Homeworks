import { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

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
                 return <GifGrid key={key} category={category} />
                }
            )
        }
        </>
    )
}    
export default GifExpertApp;