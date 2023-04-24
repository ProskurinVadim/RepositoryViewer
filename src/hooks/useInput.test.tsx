import { useState } from "react";
import { render, screen, fireEvent, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useInput } from "./useInput";
import { Input, Button } from "../components/common";
import { lettersValidator } from "../utils/validate";

/*Add missing test for Input hook*/
const TestComponent = () => {
	const { bind, reset, validate } = useInput(lettersValidator, "Initial");
	const [error, setError] = useState("No Errors");
	const handelValidate = () => {
		!validate() && setError("Error")
    }
	return (
		<>
			<Input {...bind} placeholder="Enter Value" />
			<p id="error">{error}</p>
			<Button text="Reset" onClick={reset} />
			<Button text="Validate" onClick={handelValidate} />
		</>
	)
}

describe("Use Input hook tests", () => {

	it("Describe onChange", () => {
		const { container } = render(<TestComponent />);
		const inputName = getByPlaceholderText(container, "Enter Value") as HTMLInputElement;
		expect(screen.getByDisplayValue(/Initial/)).toBeInTheDocument();
		fireEvent.change(inputName, { target: { value: 'New Value' } });
		expect(screen.getByDisplayValue(/New Value/)).toBeInTheDocument();
	});


	it("Describe onReset", () => {
		render(<TestComponent />);
		const button = screen.getByText('Reset')
		fireEvent.click(button);
		expect(screen.getByDisplayValue("")).toBeInTheDocument();
	});
	it("Describe onValidate", () => {
		render(<TestComponent />);
		expect(screen.getByText(/No Errors/)).toBeInTheDocument;
		const button = screen.getByText('Validate')
		fireEvent.click(button);
		expect(screen.getByText(/Error/)).toBeInTheDocument;
	});

	
});
