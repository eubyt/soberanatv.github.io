import React from 'react';
import {Button, ButtonVariants} from '../Button/index';
import type {TypeIconList} from '../Icon';

type CardProps = {
	title: string;
	description: string;
	image: string;
	hashtag: string;
	link: Array<{
		name: TypeIconList;
		url: string;
	}>;
};

// TODO: Deixar o card responsivo
export const Card = ({
	title,
	description,
	image,
	hashtag,
	link,
}: CardProps) => (
	<div className='flex border-2 flex-col border-pink min-w-full sm:min-w-0'>
		<div className='p-3'>
			<h3 className='text-2xl text-white'>{title}</h3>
			<p className='text-sm text-white'>{description}</p>
		</div>
		<div className='h-72 bg-slate-50'>
			{/* TODO adicionar imagem */}
		</div>
		<div className='p-3'>
			<p className='text-sm text-white'>{hashtag}</p>
		</div>
		<div className='p-3 flex space-x-3'>
			{link.map(item => (
				<Button className='px-2.5 capitalize' key={item.name} icon={item.name} variant={ButtonVariants.SECONDARY} font='font-normal' iconFontSize='text-xl'>
					{item.name}
				</Button>
			))}
		</div>
	</div>
);
