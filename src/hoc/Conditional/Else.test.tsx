import { render, screen } from '@testing-library/react'
import { Else } from "./Condition";
import '@testing-library/jest-dom';

describe("Else component test", () => {
	it("should return children", () => {
		render(<Else>Children</Else>);
		expect(screen.getByText(/Children/)).toBeInTheDocument();
	})
});

