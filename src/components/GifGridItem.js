import React from 'react'
import Proptypes from 'prop-types';
export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img className="card-img" src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
GifGridItem.propTypes = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
}