
import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {getPageProps} from 'util/markdown_cms';
import {MDXRemote} from 'next-mdx-remote';

type HomeProps = {
	frontmatter: {
		title: string;
	};
	content: any;
};

const Home: NextPage<HomeProps> = ({content, frontmatter}) => (
	<>
		<Head>
			<title>{frontmatter.title}</title>
			<meta
				name='description'
				content='Coletivo marxista-leninista de criadores de conteúdo.'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<main className='bg-black text-white'>
			<MDXRemote {...content} />
		</main>
	</>
);

export async function getStaticProps() {
	const propsPage = await getPageProps('home_page');

	return {
		props: propsPage,
	};
}

export default Home;
