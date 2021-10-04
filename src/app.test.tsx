import App from './App';
import { render, screen } from 'utils';

describe('App component', () => {
	beforeEach(() => {
		render(<App />);
	});

	it('renders a heading', () => {
		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
	});
});
