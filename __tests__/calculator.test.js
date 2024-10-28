const mathOperations = require("../calculator")

describe("Calculator Tests",()=>{
    test('adding 1 + 2 should return 3',()=>{
        expect(mathOperations.sum(1,2)).toBe(3);
    }),
    test('substracting 3-2 should return 1',()=>{
        const res = mathOperations.diff(3,2);
        expect(res).toBe(1);
    })
})