const array = [
    { name: "apple", amount: 10, favorites: true },
    { name: "bannana", amount: 13, favorites: false },
    { name: "pine", amount: 8, favorites: false },
    { name: "melone", amount: 4, favorites: true }
];
const numArray = [2, 7, 4, 11, 1];

import { SortFunction } from "./sort";

describe("Testing sort", () => {

    it(" Testing asc sort for letters should return sorted array with asc sorted favorites on the top and rest sorted in the bottom ", () => {
        const res = array.sort((a, b) => SortFunction("bucket", a, b, "asc", "name"));

        expect(res).toStrictEqual([
            { name: "apple", amount: 10, favorites: true },
            { name: "melone", amount: 4, favorites: true },
            { name: "bannana", amount: 13, favorites: false },
            { name: "pine", amount: 8, favorites: false },
        ]);

    });

    it(" Testing desc sort for numbers should return sorted array with desc sorted favorites on the top and rest sorted in the bottom ", () => {

        const res = array.sort((a, b) => SortFunction("bucket", a, b, "desc", "amount"));

        expect(res).toStrictEqual([
            { name: "apple", amount: 10, favorites: true },
            { name: "melone", amount: 4, favorites: true },
            { name: "bannana", amount: 13, favorites: false },
            { name: "pine", amount: 8, favorites: false },
        ]);

    });

    it("Testing asc sort for simply array, should return sorted array with asc sorted numbers ", () => {

        const res = numArray.sort((a, b) => SortFunction("", a, b, "asc", ""));

        expect(res).toStrictEqual([1, 2, 4, 7, 11]);

    });

})
