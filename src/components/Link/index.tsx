import type {HTMLAttributes, PropsWithChildren} from 'react';
import React from 'react';
import type {TypeIconList} from '@/components/icon';
import {IconList} from '@/components/icon';

type LinkProps = {
	icon?: TypeIconList;
	font?: string;
} & HTMLAttributes<HTMLAnchorElement>;

export const Link = ({
	children,
	icon = undefined,
	className,
	font = 'font-medium',
	...props
}: PropsWithChildren<LinkProps>) => (
	<a
		{...props}
		className={`${className ?? ''} rounded-[100px] px-6 py-2 text-white flex items-center justify-center text-base ${font}`}
	>
		{icon && IconList[icon] && <span className={`${children ? 'mr-3' : ''} text-3xl`}>{IconList[icon]}</span>}
		{children}
	</a>
);
