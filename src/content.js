import React from 'react';

const Media = props => {
    const { title, url, explanation, mediaType, date} = props
    return (
        <div className='mediaCard'>
            <h1>{title}</h1>
            <div className='video-wrapper'>
                {mediaType === "video" ? (
                    <iframe title={title} width="750" height="500" src={url} />
                ) : (
                    <img src={url} alt="Nasa POTD" />
                )}
            </div>
            <h3>{date}</h3>
            <p>{explanation}</p>
            
        </div>
    )
}

export default Media;