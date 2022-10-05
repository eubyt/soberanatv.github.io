
import type {HTMLAttributes, PropsWithChildren} from 'react';
import React from 'react';
import type {TypeIconList} from '@/components/Icon';
import {Icon} from '@/components/Icon';
import {IconList} from '@/components/Icon';

export enum ButtonVariants {
	PRIMARY = 'bg-white text-pink',
	SECONDARY = 'bg-pink text-white',
	TRANSPARENT = 'bg-transparent text-white',
}

type ButtonProps = {
	icon?: TypeIconList;
	variant?: ButtonVariants;
	font?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	icon = undefined,
	className,
	variant = ButtonVariants.PRIMARY,
	font = 'font-medium',
	...props
}: PropsWithChildren<ButtonProps>) => (
	<button
		{...props}
		className={`${className ?? ''} rounded-[100px] px-6 py-2 ${variant} flex items-center justify-center text-base ${font}`}
	>
		{icon && IconList[icon] && <Icon name={icon} />}
		<span>
			{children}
		</span>
	</button>
);
