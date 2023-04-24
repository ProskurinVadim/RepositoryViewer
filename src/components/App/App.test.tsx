import App from "./";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { render, screen, waitFor,act } from '@testing-library/react'
import '@testing-library/jest-dom';

/*Add missing test for App*/

describe("App test", () => {

    it("Check App after lazy loading", async() => {
        await act(  () => {
            render(<Provider store={store}><App /></Provider>);
            waitFor(()=>expect(screen.getByText(/Loading.../)).toBeInTheDocument());
        })
	});
});
