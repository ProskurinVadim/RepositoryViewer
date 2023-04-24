import { render, screen, fireEvent, getByRole, getByPlaceholderText } from '@testing-library/react'
import ListHeader from "./ListHeader";
import '@testing-library/jest-dom';
import { ISort } from "../../../types"


const sort: ISort = { key: "name", direction: "asc", type: "" };

describe("List headers tests", () => {
	it("When we get loading false we make button active in other ways we disable", () => {
		const onClick = jest.fn();
		const { rerender } = render(<ListHeader setSort={onClick} onAdd={onClick} sort={sort} loading={false} />);
		expect(screen.getByRole(/submit-button/)).not.toBeDisabled();
		rerender(<ListHeader setSort={onClick} onAdd={onClick} sort={sort} loading={true} />);
		expect(screen.getByRole(/submit-button/)).toBeDisabled();
	});

	it("Check if inputs updates", () => {
		const onClick = jest.fn();
		const { container } = render(<ListHeader setSort={onClick} onAdd={onClick} sort={sort} loading={false} />);
		const inputName = getByPlaceholderText(container, "Enter name") as HTMLInputElement;
		const inputAmount = getByPlaceholderText(container, "Enter amount") as HTMLInputElement;
		fireEvent.change(inputName, { target: { value: 'Name' } });
		fireEvent.change(inputAmount, { target: { value: 'Amount' } });
		expect(inputName.value).toEqual("Name");
		expect(inputAmount.value).toEqual("Amount");
	});

	it("call on submit for geting a error", () => {
		const onClick = jest.fn();
		const { container } = render(<ListHeader setSort={onClick} onAdd={onClick} sort={sort} loading={false} />);
		const button = getByRole(container, "submit-button");
		fireEvent.click(button);
		expect(getByRole(container, "error")).toHaveTextContent("Sorry name must contain only letters");
	});
});