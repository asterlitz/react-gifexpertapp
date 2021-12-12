import React,{useState} from 'react';

export const AddCategory = (props)=>{
    const [category, setCategory] = useState("");
    const handleTextChange = (e)=>{
        setCategory(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(category.trim().length > 2){
            props.addNewCategory(category);
            setCategory("");
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={category} onChange={handleTextChange} placeholder="Escriba una categoria"/>
        </form>
    );
}