import {Logo} from '@/components/Logo';
import React from 'react';
import {Link} from '../Link';
import {Button, ButtonVariants} from '../Button/index';

export enum HeaderVariants {
	PRIMARY = 'bg-black',
	ALT = 'bg-blackAlt',
}

type PropsHeader = {
	variant?: HeaderVariants;
};

export const Header = ({
	variant = HeaderVariants.PRIMARY,
}: PropsHeader) => (
	<header className={`${variant} text-white py-6 px-6 lg:px-12 w-full bg-opacity-60 smh:absolute`}>
		<div className='max-w-screen-2xl mx-auto flex justify-between'>
			<div className='w-52'>
				<Logo />
			</div>
			<div className='space-x-3 hidden lg:flex'>
				<Link icon='home' font='font-normal'>Início</Link>
				<Link icon='peaplo' font='font-normal'>Criadores</Link>
				<Link icon='article' font='font-normal'>Manifesto</Link>
				<Link icon='email' font='font-normal'>Contato</Link>
			</div>
			<div className='block lg:hidden'>
				<Button className='space-x-0 px-0' icon='menu' variant={ButtonVariants.TRANSPARENT}/>
			</div>
		</div>
	</header>
);
