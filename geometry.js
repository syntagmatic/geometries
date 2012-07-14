// Generated by CoffeeScript 1.3.3
var acos, atan2, car2sph, cos, cyl2sph, intersection, pi, polygon, sin, slopeLine, sph2car, sph2cyl, sqrt;

cos = Math.cos;

sin = Math.sin;

sqrt = Math.sqrt;

acos = Math.acos;

atan2 = Math.atan2;

pi = Math.PI;

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

intersection = function(a, b, c, d) {
  return {
    x: ((a.x * b.y - a.y * b.x) * (c.x - d.x) - (a.x - b.x) * (c.x * d.y - c.y * d.x)) / ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x)),
    y: ((a.x * b.y - a.y * b.x) * (c.y - d.y) - (a.y - b.y) * (c.x * d.y - c.y * d.x)) / ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x))
  };
};

slopeLine = function(m, b) {
  return function(x) {
    return m * x + b;
  };
};

polygon = function(circle, n) {
  var i, _i, _ref, _results;
  if (n < 1) {
    return;
  }
  _results = [];
  for (i = _i = 0, _ref = n - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    _results.push({
      i: i,
      x: circle.x + circle.r * cos(2 * pi * i / n),
      y: circle.y + circle.r * sin(2 * pi * i / n)
    });
  }
  return _results;
};
