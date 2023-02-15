import { add, subtract, negate, multiply, divide, magnitude, normalize } from "../tuple";

describe("add", () => {
  it("should add the x, y, z, and w properties of two tuples", () => {
    const a = { x: 1, y: 2, z: 3, w: 4 };
    const b = { x: 5, y: 6, z: 7, w: 8 };
    const result = add(a, b);
    expect(result).toEqual({ x: 6, y: 8, z: 10, w: 12 });
  });
});

describe("subtract", () => {
  it("should subtract the x, y, z, and w properties of two tuples", () => {
    const a = { x: 5, y: 6, z: 7, w: 8 };
    const b = { x: 1, y: 2, z: 3, w: 4 };
    const result = subtract(a, b);
    expect(result).toEqual({ x: 4, y: 4, z: 4, w: 4 });
  });
});

describe("negate", () => {
  it("should negate the x, y, z, and w properties of a tuple", () => {
    const a = { x: 1, y: 2, z: 3, w: 4 };
    const result = negate(a);
    expect(result).toEqual({ x: -1, y: -2, z: -3, w: -4 });
  });
});

describe("multiply", () => {
  it("should multiply the x, y, z, and w properties of a tuple by a scalar", () => {
    const a = { x: 1, y: 2, z: 3, w: 4 };
    const b = 2;
    const result = multiply(a, b);
    expect(result).toEqual({ x: 2, y: 4, z: 6, w: 8 });
  });
});

describe("divide", () => {
  it("should divide the x, y, z, and w properties of a tuple by a scalar", () => {
    const a = { x: 2, y: 4, z: 6, w: 8 };
    const b = 2;
    const result = divide(a, b);
    expect(result).toEqual({ x: 1, y: 2, z: 3, w: 4 });
  });
});

describe("magnitude", () => {
  it("should return the magnitude of a vector", () => {
    const a = { x: 1, y: 2, z: 3, w: 4 };
    const result = magnitude(a);
    expect(result).toEqual(5.477225575051661);
  });
});

describe("normalize", () => {
  it("should return the normalized vector", () => {
    const a = { x: 1, y: 2, z: 3, w: 4 };
    const result = normalize(a);
    expect(result).toEqual({ x: 0.18257418583505536, y: 0.3651483716701107, z: 0.5477225575051661, w: 0.7302967433402214 });
  });
});