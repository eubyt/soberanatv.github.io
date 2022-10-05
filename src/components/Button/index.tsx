import React, { HTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from 'react';

export enum ButtonVariants {
    PRIMARY = 'bg-white text-pink',
    SECONDARY = 'bg-pink text-white' 
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
}

export const Button = ({
    children,
    className,
    variant = ButtonVariants.PRIMARY,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    return (
        <button
            {...props}
            className={`${className} px-6 py-2 rounded-[100px] ${variant} text-base flex justify-center align-center font-medium`}
        >
            {children}
        </button>
    )
}