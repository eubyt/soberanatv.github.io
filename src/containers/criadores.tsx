import {Card} from '@/components/Card';
import {Heading} from '@/components/Heading';
import React from 'react';

export const Criadores = () => (
	<div className='max-w-screen-2xl mx-auto px-6 lg:px-12 2xl:px-0'>
		<Heading title='criadores'/>
		<div className='flex space-x-6 my-12'>
			<Card
				title='Soberana'
				description='Descrição'
				hashtag='#teste #teste2'
				link={[
					{
						name: 'youtube',
						url: 'https://www.google.com',
					},
					{
						name: 'twitch',
						url: 'https://www.google.com',
					},
					{
						name: 'tiktok',
						url: 'https://www.google.com',
					},
				]} image={''}
			/>
		</div>
	</div>);
