import {Card} from '@/components/Card';
import {Container} from '@/components/Container';
import {Heading} from '@/components/Heading';
import React from 'react';

export const Projetos = () => (
	<Container>
		<Heading title='projetos'/>
		<div className='flex space-x-6 my-12 overflow-auto hover:overflow-scroll no-scrollbar'>
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
	</Container>
);
