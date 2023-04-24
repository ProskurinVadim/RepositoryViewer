import { lettersValidator, numberValidator} from "./validate";

describe("Testing letters validator ", () => {

    it("For letters should return true", () => {

        const res = lettersValidator("Letters");
        expect(res).toBe(true);

    });

    it("For numbers should return false ", () => {

        const res = lettersValidator("1234");
        expect(res).toBe(false);

    });

})

describe("Testing number validator", () => {

    it("For letters, should return true", () => {

        const res = numberValidator("Letters");
        expect(res).toBe(false);

    });

    it("For numbers, should return false", () => {

        const res = numberValidator("1234");
        expect(res).toBe(true);

    });

})