import { render, screen } from '@testing-library/react'
import Spiner from "./Spiner";
import '@testing-library/jest-dom';

describe("Test spiner", () => {
	it("should paste Loading...", () => {
		render(<Spiner />);
		expect(screen.getByText(/Loading/)).toBeInTheDocument();
	});
});
