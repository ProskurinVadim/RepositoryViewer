import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button";
import '@testing-library/jest-dom';

describe("Button tests", () => {

	it("Rendered without text prop, should paste Add as default text", () => {
		const onClick = jest.fn()
		render(<Button onClick={ onClick }/>);
		expect(screen.getByText(/Add/)).toBeInTheDocument();
	});


	it("Rendered with text prop should paste Submit as text", () => {
		const onClick = jest.fn()
		render(<Button text={"Submit"} onClick={onClick} />);
		expect(screen.getByText(/Submit/)).toBeInTheDocument();
	});

	it("Check click, when button was clicked should return 1 time", () => {
		const onClick = jest.fn();
		render(<Button text={"Submit"} onClick={onClick} />);
		fireEvent.click(screen.getByText(/Submit/i));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
