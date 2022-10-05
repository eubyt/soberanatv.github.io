import {Logo} from '@/components/Logo';
import React from 'react';
import {Link} from '../Link';

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
	<header className={`${variant} text-white py-4 px-12 w-full bg-opacity-50 flex justify-between`}>
		<Logo />
		<div className='flex space-x-6'>
			<Link icon='home' font='font-normal'>Início</Link>
			<Link icon='peaplo' font='font-normal'>Criadores</Link>
			<Link icon='article' font='font-normal'>Manifesto</Link>
			<Link icon='email' font='font-normal'>Contato</Link>
		</div>
	</header>
);
