export type Tuple = {
  x: number;
  y: number;
  z: number;
  w: number; // w is 0 for a vector, 1 for a point. TODO: create a Point and Vector type
}

export const add = (a: Tuple, b: Tuple): Tuple => ({
  x: a.x + b.x,
  y: a.y + b.y,
  z: a.z + b.z,
  w: a.w + b.w,
});

export const subtract = (a: Tuple, b: Tuple): Tuple => ({
  x: a.x - b.x,
  y: a.y - b.y,
  z: a.z - b.z,
  w: a.w - b.w,
});

export const negate = (a: Tuple): Tuple => ({
  x: -a.x,
  y: -a.y,
  z: -a.z,
  w: -a.w,
});

export const multiply = (a: Tuple, b: number): Tuple => ({
  x: a.x * b,
  y: a.y * b,
  z: a.z * b,
  w: a.w * b,
});

export const divide = (a: Tuple, b: number): Tuple => ({
  x: a.x / b,
  y: a.y / b,
  z: a.z / b,
  w: a.w / b,
});