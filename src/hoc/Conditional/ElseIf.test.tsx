import { render, screen } from '@testing-library/react'
import { ElseIf } from "./Condition";
import '@testing-library/jest-dom';

describe("ElseIf component test", () => {
	it("should return children", () => {
		render(<ElseIf>Children</ElseIf>);
		expect(screen.getByText(/Children/)).toBeInTheDocument();
	})
});

