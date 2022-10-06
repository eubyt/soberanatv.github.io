import React from 'react';
import { render, screen } from '@testing-library/react'
import {Button, ButtonVariants} from '.';

// TODO: Adicionar mais testes como "hover", "focus" e "disabled".
// TODO: Refatorar as variantes.
describe('ButtonComponent', () => {
	it('should render a text', () => {
		const textToFind = 'Eu sou um botão';

		render(<Button>Eu sou um botão</Button>);
		const heading = screen.getByText(textToFind);

		expect(heading).toBeInTheDocument();
	});

	it('should render a primary button', () => {
		render(<Button variant={ButtonVariants.PRIMARY}>botão</Button>);
		const button = screen.getByRole('button');

		expect(button).toHaveClass('bg-white text-pink');

	})

	it('should render a secondary button', () => {
		render(<Button variant={ButtonVariants.SECONDARY}>botão</Button>);
		const button = screen.getByRole('button');

		expect(button).toHaveClass('bg-pink text-white');
	})
	
	it('should render a transparent button', () => {
		render(<Button variant={ButtonVariants.TRANSPARENT}>botão</Button>);
		const button = screen.getByRole('button');

		expect(button).toHaveClass('bg-transparent text-white');
	})

	it('should render an icon next to the text', () => {
		render(<Button icon="discord">botão</Button>);
		const svg = screen.getByRole('button').querySelector('svg');

		expect(svg).toBeInTheDocument();
	})

	it('there must be a space between the icon and the text', () => {
		render(<Button icon="discord">botão</Button>);
		const button = screen.getByRole('button');

		expect(button).toHaveClass('space-x-3');
	})
});
