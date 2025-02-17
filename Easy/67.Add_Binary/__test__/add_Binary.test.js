import { addBinary } from "../add_Binary";

describe("Add Binary Function", () => {

  test("Adding '101' and '11' should return '1000'", () => {
    expect(addBinary("101", "11")).toBe("1000");
  });

  test("Adding '1' and '111' should return '1000'", () => {
    expect(addBinary("1", "111")).toBe("1000");
  });

  test("Adding '111' and '111' should return '1110'", () => {
    expect(addBinary("111", "111")).toBe("1110");
  });

  test("Adding '0' and '0' should return '0'", () => {
    expect(addBinary("0", "0")).toBe("0");
  });

  test("Adding '0' and '1' should return '1'", () => {
    expect(addBinary("0", "1")).toBe("1");
  });

  test("Adding '1001' and '101' should return '1110'", () => {
    expect(addBinary("1001", "101")).toBe("1110");
  });

  test("Adding two long binary numbers should return correct result", () => {
    expect(addBinary("1010101010101010", "1100110011001100")).toBe("10111001100101110");
  });

  test("Adding two numbers where carry extends the length", () => {
    expect(addBinary("111", "1")).toBe("1000");
  });

});