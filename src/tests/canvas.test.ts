import { BLACK } from "../color";
import { canvas, writePixel } from "../canvas";

describe("canvas", () => {
  it("should create a canvas", () => {
    const c = canvas(10, 20);
    expect(c.width).toBe(10);
    expect(c.height).toBe(20);
    for (let y = 0; y < c.height; y++) {
      for (let x = 0; x < c.width; x++) {
        expect(c.pixels[y][x]).toEqual(BLACK);
      }
    }
  });
});

describe("writePixel", () => {
  it("should write a pixel", () => {
    const c = canvas(10, 20);
    const red = { red: 1, green: 0, blue: 0 };
    writePixel(c, 2, 3, red);
    expect(c.pixels[3][2]).toEqual(red);
  });
});