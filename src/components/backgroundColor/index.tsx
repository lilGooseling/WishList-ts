import React from 'react';




interface ColorProps {
    backgroundColor: string | undefined
    children: any
}

const Color: React.FC<ColorProps> = ({children, backgroundColor}) => {

    return <div  style={{backgroundColor: backgroundColor || "transparent"}}>
        {children}
    </div>

};

export default Color;
