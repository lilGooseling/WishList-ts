import React from 'react';


interface BackgroundImageProps {
    backgroundImage: string | undefined
    children: any

}

const BackgroundImage: React.FC<BackgroundImageProps> = ({children, backgroundImage}) => {

    return <div style={{backgroundImage: `url(${backgroundImage})`}}>
        {children}
    </div>

};

export default BackgroundImage;
