import React from 'react';
import '../../styles/headImage.css';


export default function HeadLineImage() {
    return (
        <div className="head-line-image">
            <img
                src="../src/assets/headline.jpg"
                alt="Head-Line Image"
                style={{
                    width: '100%',
                    height: 'auto', // Maintains aspect ratio
                    maxHeight: '50rem', // Ensures the image doesn't exceed this height
                    objectFit: 'cover' // Ensures the image covers the container area
                }}
            />
        </div>
    );
}
