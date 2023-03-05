import { add, subtract, multiply, multiplyScalar } from "../color";
import {toBeDeepCloseTo} from 'jest-matcher-deep-close-to';
expect.extend({toBeDeepCloseTo});

describe("add", () => {
  it("should add the red, green, and blue properties of two colors", () => {
    const a = { red: 0.9, green: 0.6, blue: 0.75 };
    const b = { red: 0.7, green: 0.1, blue: 0.25 };
    const result = add(a, b);
    expect(result).toBeDeepCloseTo({ red: 1.6, green: 0.7, blue: 1.0 });
  });
});

describe("substract", () => {
  it("should substract the red, green, and blue properties of two colors", () => {
    const a = { red: 0.9, green: 0.6, blue: 0.75 };
    const b = { red: 0.7, green: 0.1, blue: 0.25 };
    const result = subtract(a, b);
    expect(result).toBeDeepCloseTo({ red: 0.2, green: 0.5, blue: 0.5 });
  });
});

describe("multiply", () => {
  it("should multiply the red, green, and blue properties of a color", () => {
    const a = { red: 1, green: 0.2, blue: 0.4 };
    const b = { red: 0.9, green: 1, blue: 0.1 };
    const result= multiply(a, b);
    expect(result).toBeDeepCloseTo({ red: 0.9, green: 0.2, blue: 0.04 });
  });
});

describe("multiplyScalar", () => {
  it("should multiply the red, green, and blues properties of a color by a scalar", () => {
    const a = { red: 0.2, green: 0.3, blue: 0.4 };
    const b = 2;
    const result = multiplyScalar(a, b);
    expect(result).toBeDeepCloseTo({ red: 0.4, green: 0.6, blue: 0.8 });
  });
});

