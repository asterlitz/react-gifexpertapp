import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GifGrid';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const addNewCategory = (category)=>{
        setCategories([category, ...categories]);
    };
    return (
        <>
            <h1>Gif expert app</h1>
            <AddCategory addNewCategory={ addNewCategory }/>
            <hr/>
            <ul>
                {
                    categories.map((c, id)=>{
                        return <GridGif key={id} category={c} />;
                    })
                }
            </ul>
        </>
    )
}
