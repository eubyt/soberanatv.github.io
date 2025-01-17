import type {HTMLAttributes, PropsWithChildren} from 'react';
import React from 'react';
import type {TypeIconList} from '@/components/Icon';
import {Icon} from '@/components/Icon';
import {IconList} from '@/components/Icon';

type LinkProps = {
	icon?: TypeIconList;
	font?: string;
	fontSize?: string;
	iconFontSize?: string;
} & HTMLAttributes<HTMLAnchorElement>;

// TODO:Hover temporário
export const Link = ({
	children,
	icon = undefined,
	className,
	font = 'font-medium',
	fontSize = 'text-base',
	iconFontSize = 'text-3xl',
	...props
}: PropsWithChildren<LinkProps>) => (
	<a
		{...props}
		className={`${className ?? ''} px-6 py-2 text-white flex items-center justify-center ${fontSize} space-x-3 ${font} hover:border-b-4 hover:border-pink hover:cursor-pointer ease-in duration-100`}
	>
		{icon && IconList[icon] && <Icon name={icon} fontSize={iconFontSize} />}
		<span>
			{children}
		</span>
	</a>
);

