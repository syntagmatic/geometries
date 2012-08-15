cos = Math.cos
sin = Math.sin
sqrt = Math.sqrt
acos = Math.acos
atan2 = Math.atan2
pi = Math.PI

## Coordinate Transformations

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

# Intersection of two lines: ab and cd
intersection = (a, b, c, d) ->
  x: ((a.x * b.y - a.y * b.x) * (c.x - d.x) - (a.x - b.x) * (c.x * d.y - c.y * d.x)) /
     ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x))
  y: ((a.x * b.y - a.y * b.x) * (c.y - d.y) - (a.y - b.y) * (c.x * d.y - c.y * d.x)) /
     ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x))

## Lines


# 2D Euclidean Line
# y = mx + b
slopeLine = (m,b) ->
  (x) -> m*x + b

# Slope of two points
slope = (a,b) ->
  (b.y - a.y) / (b.x - a.x)

## Shapes

# Regular polygon
# circle {x,y,r}
polygon = (circle, n) ->
  if n < 1
    return
  for i in [0..n-1]
    i: i
    x: circle.x+circle.r*cos(2*pi*i/n)
    y: circle.y+circle.r*sin(2*pi*i/n)
