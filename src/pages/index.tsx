
import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';
import {getPageProps} from '@/util/markdown_cms';
import {Header, HeaderVariants} from '@/components/Header';
import {Button} from '@/components/Button';
import {Criadores} from '@/containers/criadores';
import {Anuncio} from '@/containers/anuncio';
import {Projetos} from '@/containers/projetos';
import {Container} from '@/components/Container';

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
			<Header variant={HeaderVariants.ALT} />

			<div className='bg-no-repeat bg-cover bg-center' style={{
				backgroundImage: 'url(/images/bg_1.png)',
			}}>
				<Container>
					<div className='flex min-h-screen flex-col justify-center'>
						<div className='block'>
							<h1 className='text-3xl text-white lg:left-12 lg:text-6xl font-medium w-full md:w-3/5 2xl:w-2/5'>{frontmatter.heading_primary}</h1>
							<Button className='mt-4' icon='discord'>Junte-se ao Discord</Button>
						</div>
					</div>
				</Container>
			</div>

			<div className='flex min-h-screen flex-col justify-center'>
				<div className='block'>
					<Criadores />
				</div>
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
