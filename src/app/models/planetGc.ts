export class PlanetGc {
  id: string;
  url: string;
  image: string;
  gravity: string;
  climate: string;
  name: string;
  terrain: string;
  tier: string;
  average: string;
  recruitment: string;
  factory: string;
  diameter: string;
  population: string;

  constructor(
    id: string,
    url: string,
    image: string,
    gravity: string,
    climate: string,
    name: string,
    terrain: string,
    tier: string,
    average: string,
    recruitment: string,
    factory: string,
    diameter: string,
    population: string
) {
    this.id = id
    this.url = url
    this.image = image
    this.gravity = gravity
    this.climate = climate
    this.name = name
    this.terrain = terrain
    this.tier = tier
    this.average = average
    this.recruitment = recruitment
    this.factory = factory
    this.diameter = diameter
    this.population = population
  }


}
