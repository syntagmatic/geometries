(function() {
  var acos, atan2, car2sph, cos, cyl2sph, sin, sph2car, sph2cyl, sqrt;

  cos = Math.cos;

  sin = Math.sin;

  sqrt = Math.sqrt;

  acos = Math.acos;

  atan2 = Math.atan2;

  sph2car = function(r, ɵ, φ) {
    return {
      x: r * cos(φ) * sin(ɵ),
      y: r * sin(φ) * sin(ɵ),
      z: r * cos(ɵ)
    };
  };

  car2sph = function(x, y, z) {
    return {
      r: sqrt(x * x + y * y + z * z),
      φ: atan2(y, x),
      ɵ: acos(z / r)
    };
  };

  cyl2sph = function(ρ, φ, z) {
    return {
      r: sqrt(ρ * ρ + z * z),
      ɵ: atan2(ρ, z),
      φ: φ
    };
  };

  sph2cyl = function(r, θ, φ) {
    return {
      ρ: r * sin(θ),
      φ: φ,
      z: r * cos(θ)
    };
  };

}).call(this);
