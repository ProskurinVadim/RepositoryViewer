import React from "react";
import { render, screen } from '@testing-library/react'
import Loadable from "./";
import '@testing-library/jest-dom';

describe("Loading HOC test", () => {
	it("should return loading when it's loading and Elem when stops", () => {
		const { rerender } = render(<Loadable loading={true}>Elem</Loadable>);
		expect(screen.getByText(/Loading.../)).toBeInTheDocument();
		rerender(<Loadable loading={false}>Elem</Loadable>)
		expect(screen.getByText(/Elem/)).toBeInTheDocument();
	});
});

