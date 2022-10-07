import React from 'react';

type PropsContainer = {
	children: React.ReactNode;
};

export const Container = ({children}: PropsContainer) => (<div className='max-w-screen-2xl mx-auto px-6 lg:px-12 2xl:px-0'> {children}</div>);
