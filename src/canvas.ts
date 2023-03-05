import { Color, BLACK } from "./color";

export type Canvas = {
  width: number;
  height: number;
  pixels: Color[][];
};

export const canvas = (width: number, height: number): Canvas => ({
  width,
  height,
  pixels: Array.from({ length: height }, () => Array.from({ length: width }, () => BLACK))
});

export const writePixel = (c: Canvas, x: number, y: number, color: Color): void => {
  c.pixels[y][x] = color;
};