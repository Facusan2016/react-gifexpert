import React from 'react'

export const GifGridItem = ({title, url, id}) => {
    
    return(
        <div className='card'>
            <img src= {url} alt='image not found'></img>
            <p>{title}</p>
        </div>
    )
}
