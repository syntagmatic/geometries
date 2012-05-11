cos = Math.cos
sin = Math.sin
sqrt = Math.sqrt
acos = Math.acos
atan2 = Math.atan2

# Spherical to Cartesian Coordinates
sph2car = (r,ɵ,φ) ->
  x: r * cos(φ) * sin(ɵ)
  y: r * sin(φ) * sin(ɵ)
  z: r * cos(ɵ)

# Cartesian to Spherical Coordinates
car2sph = (x,y,z) ->
  r: sqrt(x*x + y*y + z*z)
  φ: atan2(y,x)
  ɵ: acos(z/r)

# Cylindrical to Spherical Coordinates
cyl2sph = (ρ,φ,z) ->
  r: sqrt(ρ*ρ + z*z)
  ɵ: atan2(ρ,z)
  φ: φ

# Spherical to Cylindrical Coordinates
sph2cyl = (r,θ,φ) ->
  ρ: r * sin(θ)
  φ: φ
  z: r * cos(θ)
