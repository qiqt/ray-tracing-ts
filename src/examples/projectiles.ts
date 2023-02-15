import { add, Point, Vector, normalize } from "../tuple";

type Projectile = {
  position: Point;
  velocity: Vector;
};

type Environment = {
  gravity: Vector;
  wind: Vector;
};

const tick = (environment: Environment, projectile: Projectile): Projectile => {
  const position = add(projectile.position, projectile.velocity);
  const velocity = add(projectile.velocity, add(environment.gravity, environment.wind));
  return { position, velocity } as Projectile;
}

const isRunning = (projectile: Projectile): boolean => projectile.position.y > 0;

const main = () => {
  let projectile = {
    position: { x: 0, y: 1, z: 0, w: 1 } as Point,
    velocity: normalize({ x: 1, y: 1.8, z: 0, w: 0 }) as Vector,
  } as Projectile;

  const environment = {
    gravity: { x: 0, y: -0.1, z: 0, w: 0 } as Vector,
    wind: { x: -0.01, y: 0, z: 0, w: 0 } as Vector,
  } as Environment;

  while (isRunning(projectile)) {
    projectile = tick(environment, projectile);
    console.log(projectile.position);
  }
}

main();