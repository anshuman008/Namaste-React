import { sum } from "../sum";


test("Sum Function its give Sum of Two Numbers",()=>{
    const result = sum(5,3);
    
    // Assertion
    expect(result).toBe(8);
});