import React from 'react';

const ImagaGalleryItem = ({ article, onHandleClick }) => {
    return (
        <li className="ImageGalleryItem" onClick={onHandleClick}>
            <img
                src={article.webformatURL}
                alt={article.tags}
                data-url={article.largeImageURL}
                className="ImageGalleryItem-image"
            />
        </li>
    );
};
export default ImagaGalleryItem;
