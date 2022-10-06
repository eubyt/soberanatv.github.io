
import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';
import {MDXRemote} from 'next-mdx-remote';
import {getPageProps} from '@/util/markdown_cms';
import {Header, HeaderVariants} from '@/components/Header';
import {Button} from '@/components/Button';
import {Heading} from '@/components/Heading';
import {Criadores} from '@/containers/criadores';
import {Anuncio} from '@/containers/anuncio';
import {Projetos} from '@/containers/projetos';

type HomeProps = {
	frontmatter: {
		title: string;
		heading_primary: string;
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
		<main className='bg-blackAlt text-white'>
			<div className='bg-no-repeat bg-cover bg-center h-screen md:h-full' style={{
				backgroundImage: 'url(/images/bg_1.png)',
			}}>
				<Header variant={HeaderVariants.ALT} />
				<div className='max-w-screen-2xl mx-auto px-6 lg:px-12 2xl:px-0'>
					<div className='py-12 md:py-60'>
						<h1 className='text-3xl text-white lg:left-12 lg:text-6xl font-medium w-full md:w-3/5 2xl:w-2/5'>{frontmatter.heading_primary}</h1>
						<Button className='mt-4' icon='discord'>Junte-se ao Discord</Button>
					</div>
				</div>
			</div>
			<div className='py-20'>
				<Criadores />
			</div>
			<div className='py-20 bg-black'>
				<Anuncio />
			</div>
			<div className='py-20'>
				<Projetos />
			</div>
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
