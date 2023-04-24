import { render, screen } from '@testing-library/react'
import ListItem from "./ListItem";
import '@testing-library/jest-dom';


describe("List Item tests", () => {
	it("Checking list item on main props,should find all main field", () => {
		const onClick = jest.fn();
		const item = { name: "Apple", favorites:false, amount:8,}
		render(<ListItem onDelete={onClick} onFavorites={onClick} item={item} />);

		expect(screen.getByText(/Apple/)).toBeInTheDocument();
		expect(screen.getByText(/8/)).toBeInTheDocument();
		expect(screen.getByRole(/star/)).toBeInTheDocument();
	});

	it("Checking list item on aditional props, should find all main field", () => {
		const onClick = jest.fn();
		const item = { name: "Apple", favorites: false, amount: 8, image: "src", description: "description" }
		render(<ListItem onDelete={onClick} onFavorites={onClick} item={item} />);

		expect(screen.getByText(/description/)).toBeInTheDocument();
		expect(screen.getByRole(/image/)).toBeInTheDocument();
	});
});

