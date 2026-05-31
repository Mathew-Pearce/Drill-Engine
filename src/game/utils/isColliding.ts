export function isColliding(a, b) {

    return (
      Math.abs(a.position.x - b.position.x) <
        (a.size + b.size) / 2
    &&
      Math.abs(a.position.y - b.position.y) <
        (a.size + b.size) / 2
    );
  }