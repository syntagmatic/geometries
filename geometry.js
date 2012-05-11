var acos, atan2, car2sph, cos, cyl2sph, sin, sph2car, sph2cyl, sqrt;

cos = Math.cos;

sin = Math.sin;

sqrt = Math.sqrt;

acos = Math.acos;

atan2 = Math.atan2;

sph2car = function(r, theta, phi) {
  return {
    x: r * cos(phi) * sin(theta),
    y: r * sin(phi) * sin(theta),
    z: r * cos(theta)
  };
};

car2sph = function(x, y, z) {
  var r;
  r = sqrt(x * x + y * y + z * z);
  return {
    r: r,
    phi: atan2(y, x),
    theta: acos(z / r)
  };
};

cyl2sph = function(rho, phi, z) {
  return {
    r: sqrt(rho * rho + z * z),
    theta: atan2(rho, z),
    phi: phi
  };
};

sph2cyl = function(r, theta, phi) {
  return {
    rho: r * sin(theta),
    phi: phi,
    z: r * cos(theta)
  };
};
