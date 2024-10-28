// setup and cleanup

const mathOperations = require("../calculator");

describe("Calculator Tests",()=>{
    beforeAll(()=>{
        console.log("beforeAll called");
    })
    beforeEach(()=>{
        inpt1 = 10
        inpt2 = 5
        console.log("beforeEach called");
    })
    afterAll(()=>{
        console.log("afterAll called");
    })
    afterEach(()=>{
        console.log("afterEach called");
    })
    test('add',()=>{
        const res = mathOperations.sum(inpt1,inpt2);
        expect(res).toBe(15);
    })
    test('diff',()=>{
        const res = mathOperations.diff(inpt1,inpt2);
        expect(res).toBe(5);
    })
})