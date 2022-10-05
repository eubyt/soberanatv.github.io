
import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';
import {MDXRemote} from 'next-mdx-remote';
import {getPageProps} from '@/util/markdown_cms';
import {Header, HeaderVariants} from '@/components/Header';

type HomeProps = {
	frontmatter: {
		title: string;
	};
	content: MDXRemoteSerializeResult;
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
			{/* <div className='max-w-screen-2xl mx-auto'>
				<div className='h-screen' style={{
					backgroundImage: 'url(/images/bg_1.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
					<Header variant={HeaderVariants.ALT} />
				</div>
			</div> */}
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
