import type {HTMLAttributes, PropsWithChildren} from 'react';
import React from 'react';

export enum ButtonVariants {
	PRIMARY = 'bg-white text-pink',
	SECONDARY = 'bg-pink text-white',
}

type ButtonProps = {
	variant?: ButtonVariants;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	className,
	variant = ButtonVariants.PRIMARY,
	...props
}: PropsWithChildren<ButtonProps>) => (
	<button
		{...props}
		className={`${className ?? ''} rounded-[100px] px-6 py-2 ${variant} flex items-center justify-center text-base font-medium`}
	>
		{children}
	</button>
);
