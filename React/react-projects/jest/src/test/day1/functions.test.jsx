import { isLegalAge, sum, divide, fetchUser, capitalize, isValidEmail, wait } from "./functions.js"
import {jest} from '@jest/globals'

describe("sum()", () => {
    test("adding two numbers", () => {
        expect(sum(1,2)).toBe(3)
    })
})

describe('isLegalAge()', () => {
  test('checking legal age', () => {
    expect(isLegalAge(18)).toBe(true)
  })
  
})

test("throws error when dividing by zero", () => {
  expect(() => divide(1,0)).toThrow("Cannot divide by zero");
});

test("fetchuser function", async () => {
    const data = await fetchUser()
    expect(data.name).toBe("Test")
})


test("capitalize", () => {
    expect(capitalize("vicky")).toBe("Vicky")
})

describe("isValidEmail()", () => {
  test("valid email", () => {
    expect(isValidEmail("test@email.com")).toBe(true);
  });

  test("invalid email", () => {
    expect(isValidEmail("invalid")).toBe(false);
  });
});

jest.useFakeTimers();

test("wait", async () => {
    const promise = wait(2000)

    jest.advanceTimersByTime(2000); 
    await expect(promise).resolves.toBeUndefined()
})