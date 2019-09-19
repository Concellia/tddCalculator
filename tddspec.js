describe("It should be able to add numbers and multiply numbers", function(){
  it("should return zero when passed in two zeros", function(){
     const result = add(0,0);
     expect(result).toBe(0); 
  })  
  it("should return the sum of two negatives when passed in two negative numbers", function(){
    let result = add(-1,-1);
    expect(result).toBe(-2);
  });
  it("should return the sum of two  positives when passes in two positive numbers", function(){
    let result = add(4,5);
    expect(result).toBe(9);
  })
  it("should return the sum of  as many numbers as passed in", function(){
    let result = add(1,2,3,4);
    expect(result).toBe(10);
  })
  it("should should multiply 2 numbers", function(){
    let result = multiply(1,2);
    expect(result).toBe(2);
  })
  it("should multiply multiple numbers", function(){
    let result = multiply(1,2,3,4);
    expect(result).toBe(24);
  })
})