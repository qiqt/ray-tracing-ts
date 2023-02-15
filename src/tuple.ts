export type Tuple = {
  x: number;
  y: number;
  z: number;
  w: number; // w is 0 for a vector, 1 for a point. TODO: create a Point and Vector type
}

export type Vector = Tuple & { w: 0 };
export type Point = Tuple & { w: 1 };

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

export const magnitude = (a: Tuple): number => (
  Math.sqrt(a.x ** 2 + a.y ** 2 + a.z ** 2 + a.w ** 2)
);

export const normalize = (a: Tuple): Tuple => {
  const mag = magnitude(a);
  return divide(a, mag);
};

export const dot = (a: Vector, b: Vector): number => (
  a.x * b.x + a.y * b.y + a.z * b.z
);

export const cross = (a: Vector, b: Vector): Vector => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x,
  w: 0,
});

