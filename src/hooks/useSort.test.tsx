import { FC } from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Button } from "../components/common";
import '@testing-library/jest-dom';
import { useSort } from "./useSort";
/*Add missing test for Sort hook*/

const initialData = [
	{ name: "C", favorite: false,amount:0 },
	{ name: "A", favorite: false, amount: 0 },
	{ name: "B", favorite: true, amount: 0 },
	{ name: "D", favorite: true, amount: 0 },
	{ name: "F", favorite: false, amount: 0 }
]
interface ITest {
	type: "bucket" | ""
}
const TestComponent: FC<ITest> = ({ type }) => {
	const { setSort, data } = useSort(initialData)
	return (
		<>
			<p>{data[0].name}</p>
			<Button text="Sort" onClick={() => setSort("name", type)}/>
		</>
	)
}

describe("Use Sort hook tests", () => {

	it("Testing Initial data", () => {
		render(<TestComponent type="" key="name"/>);
		expect(screen.getByText(/C/)).toBeInTheDocument();
	});

	it("Testing asc & desc sort for favorite items", async () => {
		render(<TestComponent type="bucket" key="name" />);
		const button = screen.getByText('Sort');
		fireEvent.click(button);
		waitFor(()=>expect(screen.getByText(/B/)).toBeInTheDocument());
		fireEvent.click(button);
		waitFor(()=>expect(screen.getByText(/D/)).toBeInTheDocument());
	});

	it("Testing asc & desc sort for all items", () => {
		render(<TestComponent type="" key="name" />);
		const button = screen.getByText('Sort');
		fireEvent.click(button);
		waitFor(()=>expect(screen.getByText(/A/)).toBeInTheDocument());
		fireEvent.click(button);
		waitFor(()=>expect(screen.getByText(/F/)).toBeInTheDocument());
	});
});
