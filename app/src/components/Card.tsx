import React, {FC, useState} from 'react';

export enum ButtonVariant{
  outlined='outlined',
  primary='primary'
}

interface CardProps{
    width?: string,
    height?: any,
    border?: string,
    onClick: (data: string) => void,
    variant: ButtonVariant
}

const Card:FC<CardProps> = ({width, height, border, children, onClick, variant}) => {
    const [text, setText] = useState('This is typescript and many any elements');
    return (
        <div style={{width, height,
            border: variant === ButtonVariant.outlined? `${border}`: 'none',
            backgroundColor: variant === ButtonVariant.primary?  "yellow": ''}} onClick={() => onClick(text)}>
            {children}
        </div>
    );
};

export default Card;