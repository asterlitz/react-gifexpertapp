import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGif';
export const GridGif = ({category})=>{
    
    const {data, loading} = useFetchGif(category);
    return (
        <>
            <h3>{category}</h3>
            <p>{loading && '...loading'}</p>
            <div className="card-grid" >
                    {
                        data.map((img) =>
                        {
                            return <GifGridItem key={img.id} {...img} />
                        })
                    }
            </div>
        </>
    )
}
