// Example utility function for testing
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function formatSentence(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

describe("Utility Functions", () => {
  describe("add", () => {
    it("should add two positive numbers correctly", () => {
      expect(add(2, 3)).toBe(5);
      expect(add(0, 5)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });

    it("should handle negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-5, 3)).toBe(-2);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers correctly", () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe("formatSentence", () => {
    it("should capitalize first letter and lowercase the rest", () => {
      expect(formatSentence("hello world")).toBe("Hello world");
      expect(formatSentence("HELLO WORLD")).toBe("Hello world");
      expect(formatSentence("hELLO wORLD")).toBe("Hello world");
    });

    it("should handle single character strings", () => {
      expect(formatSentence("a")).toBe("A");
      expect(formatSentence("Z")).toBe("Z");
    });

    it("should handle empty string", () => {
      expect(formatSentence("")).toBe("");
    });
  });
});
