import {Card} from '@/components/Card';
import {Heading} from '@/components/Heading';
import React from 'react';

export const Projetos = () => (<div className='max-w-screen-2xl mx-auto px-12'>
	<Heading title='Projetos'/>
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
