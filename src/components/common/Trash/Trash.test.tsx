import { render, screen, fireEvent } from '@testing-library/react'
import Trash from "./Trash";
import '@testing-library/jest-dom';

describe("Trash icon test trash", () => {
	it("should find icon", () => {
		const onClick = jest.fn();
		render(<Trash onClick={onClick}/>);
		expect( screen.getByRole(/trash/)).toBeInTheDocument();
	});
});

describe("Calls on click, when trash was clicked button", () => {
	it("should return 1 time", () => {
		const onClick = jest.fn();
		render(<Trash onClick={onClick} />);
		expect(screen.getByRole(/trash/)).toBeInTheDocument();
		fireEvent.click(screen.getByRole(/trash/));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});




