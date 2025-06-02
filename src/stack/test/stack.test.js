const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allow push item", () => {
    stack.push("banana");
    expect(stack.size()).toBe(1);
  });
  describe("pop", () => {
    it("스택이 비어있다면 팝은 에러를 던집니다.", () => {
      expect(() => {
        stack.pop();
      }).toThrow("스택이 비어있음");
    });
    it("마지막 아이템을 리턴할거고 스택에서 제거할거야", () => {
      stack.push("바나나");
      stack.push("사과");

      expect(stack.pop()).toBe("사과");
      expect(stack.size()).toBe(1);
    });
  });
  describe("peek", () => {
    it("스택이 비어있다면 팝은 에러를 던집니다.", () => {
      expect(() => {
        stack.pop();
      }).toThrow("스택이 비어있음");
    });
    it("스택에는 그대로 있지만 어떤 값인지 확인한다.", () => {
      stack.push("바나나");
      stack.push("사과");

      expect(stack.peek()).toBe("사과");
      expect(stack.size()).toBe(2);
    });
  });
});
