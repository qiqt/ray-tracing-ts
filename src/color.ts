export type Color = {
  red: number;
  green: number;
  blue: number;
};

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

export const normalize = (a: Color): Color => ({
  red: toFixed(a.red , 2),
  green: toFixed(a.green, 2),
  blue: toFixed(a.blue, 2),
});

export const toFixed = (a: number, b: number): number => (
  Math.round(a * 10 ** b) / 10 ** b
);
