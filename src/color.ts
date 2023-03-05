export type Color = {
  red: number;
  green: number;
  blue: number;
};

export const BLACK = { red: 0, green: 0, blue: 0 };

export const add = (a: Color, b: Color): Color => ({
  red: a.red + b.red,
  green: a.green + b.green,
  blue: a.blue + b.blue,
});

export const subtract = (a: Color, b: Color): Color => ({
  red: a.red - b.red,
  green: a.green - b.green,
  blue: a.blue - b.blue,
});

export const multiply = (a: Color, b: Color): Color => ({
  red: a.red * b.red,
  green: a.green * b.green,
  blue: a.blue * b.blue,
});

export const multiplyScalar = (a: Color, b: number): Color => ({
  red: a.red * b,
  green: a.green * b,
  blue: a.blue * b,
});