import { sum } from "./sum.js"

describe("sum()", () => {
    test("adding two numbers", () => {
        expect(sum(1,2)).toBe(3)
    })
})