import type {HTMLAttributes, PropsWithChildren} from 'react';
import React from 'react';
import type {TypeIconList} from '@/components/Icon';
import {Icon} from '@/components/Icon';
import {IconList} from '@/components/Icon';

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
		className={`${className ?? ''} px-6 py-2 text-white flex items-center justify-center text-base space-x-3 ${font}`}
	>
		{icon && IconList[icon] && <Icon name={icon} />}
		<span>
			{children}
		</span>
	</a>
);

