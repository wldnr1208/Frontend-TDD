const Calculator = require("../calculator.js");

//관련된 테스트 애들을 묶을 수 있는 것
describe("Calculator", () => {
  let cal;
  //반복돠는 것 beforeEach로 미리 선언
  beforeEach(() => {
    cal = new Calculator();
  });
  //it은 3인칭 즉 calculator
  it("inits with 0", () => {
    // calculator가 value가 0으로 초기화 되어야한다.
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("add가 100보다 크다면 에러를 던져라", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract", () => {
    cal.set(3);
    cal.subtract(1);
    expect(cal.value).toBe(2);
  });

  it("multiply", () => {
    cal.set(3);
    cal.multiply(1);
    expect(cal.value).toBe(3);
  });

  //나누기는 까다로워서 또 나누어줌
  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
