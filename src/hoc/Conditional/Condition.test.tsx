import { render, screen } from '@testing-library/react'
import Condition, { If, Else, ElseIf } from "./Condition";
import '@testing-library/jest-dom';

describe("Condition HOC tests", () => {
	it("should simulate work of if elseif else structure", () => {
		const { rerender } = render(<Condition condition={true}>
			<If>If</If>
			<ElseIf>ElseIf</ElseIf>
			<Else>Else</Else>
		</Condition>);

		expect(screen.getByText(/If/)).toBeInTheDocument();

		rerender(<Condition condition={false}>
			<If>If</If>
			<ElseIf condition={true}>ElseIf</ElseIf>
			<Else>Else</Else>
		</Condition>)

		expect(screen.getByText(/ElseI/)).toBeInTheDocument();

		rerender(<Condition condition={false}>
			<If>If</If>
			<ElseIf condition={false}>ElseIf</ElseIf>
			<Else>Else</Else>
		</Condition>)

		expect(screen.getByText(/Else/)).toBeInTheDocument();
	});
});

