import type {HtmlHTMLAttributes} from 'react';
import React from 'react';

type HeadingProps = {
	title: string;
} & HtmlHTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
	title,
	className,
	...props
}: HeadingProps) => (
	<h2
		className={`${className ?? ''} relative inline-flex flex-col font-head text-5xl text-orange lg:text-9xl`}
		{...props}
	>
		<span className='block h-1 w-36 bg-pink' />
		<span className='select-none'>{title}</span>
		<span className='absolute left-5 top-10 text-3xl text-white lg:left-12 lg:text-6xl'>
			{title}
		</span>
	</h2>
);
