import { render, screen } from '@testing-library/react'
import Star from "./Star";
import '@testing-library/jest-dom';

describe("Start test", () => {
	it("should return different icon for different type of favor", () => {
		const onClick = jest.fn();
		const { rerender } = render(<Star favorites={true} onClick={onClick}/>);
		expect(screen.getByRole(/fill-star/)).toBeInTheDocument();
		rerender(<Star favorites={false} onClick={onClick} />);
		expect(screen.getByRole(/star/)).toBeInTheDocument();
	});
});

