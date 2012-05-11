cos = Math.cos
sin = Math.sin
sqrt = Math.sqrt
acos = Math.acos
atan2 = Math.atan2

# Spherical to Cartesian Coordinates
sph2car = (r,theta,phi) ->
  x: r * cos(phi) * sin(theta)
  y: r * sin(phi) * sin(theta)
  z: r * cos(theta)

# Cartesian to Spherical Coordinates
car2sph = (x,y,z) ->
  r = sqrt(x*x + y*y + z*z)
  r: r
  phi: atan2(y,x)
  theta: acos(z/r)

# Cylindrical to Spherical Coordinates
cyl2sph = (rho,phi,z) ->
  r: sqrt(rho*rho + z*z)
  theta: atan2(rho,z)
  phi: phi

# Spherical to Cylindrical Coordinates
sph2cyl = (r,theta,phi) ->
  rho: r * sin(theta)
  phi: phi
  z: r * cos(theta)
