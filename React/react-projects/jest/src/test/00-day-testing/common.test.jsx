import '@testing-library/jest-dom'
import { forEach } from './common'

const mockCallback = jest.fn(val => val+15)
test("testing mock with callback function", () => {
    forEach([0,1], mockCallback);


    expect(mockCallback.mock.calls).toHaveLength(2);

    expect(mockCallback.mock.calls[0][0]).toBe(0);

    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(15);

    // console.log(mockCallback.mock)
})

test("cheecking mock properties", () => {
    const mock1 = jest.fn()
    const a = new mock1()
    console.log(mock1.mock.instances);


    const mock2 = jest.fn()
    const b = {test: "test"}
    const bound = mock2.bind(b)
    bound() 
    console.log(mock2.mock);    
})

test("testing mockreturn values", () => {
    const filterfn = jest.fn()

    filterfn.mockReturnValueOnce(true).mockReturnValueOnce(false)

    const result = [11,12].filter(num => filterfn(num))

    console.log(result);    
     
    console.log(filterfn.mock.calls[0][0]);
    console.log(filterfn.mock.calls[1][0]);
    
})