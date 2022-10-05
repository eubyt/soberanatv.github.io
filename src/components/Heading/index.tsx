import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    title: string;
}

export const Heading = ({
    title,
    className,
    ...props
}: HeadingProps) => {
    return (
        <h2
            className={`${className} relative font-head inline-flex flex-col text-orange text-5xl lg:text-9xl`}
            {...props}
        >
            <span className='w-36 block bg-pink h-1' />
            <span>{title}</span>
            <span  className='text-white text-3xl lg:text-6xl absolute left-5 lg:left-12 top-10'>
                {title}
            </span>
        </h2>
    )
}