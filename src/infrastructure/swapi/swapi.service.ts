import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { SwapiPeople, peopleFactory } from './models/people';
import { SwapiPlanet, planetFactory } from './models/planet';
import { SwapiFilm, filmFactory } from './models/film';
import { SwapiSpecie, specieFactory } from './models/specie';
import { SwapiVehicle, vehicleFactory } from './models/vehicle';
import { SwapiStarship, starshipFactory } from './models/starship';

const SWAPI_URL = 'https://swapi.dev/api';

enum SwapiResource {
  PEOPLE = 'people',
  PLANETS = 'planets',
  FILMS = 'films',
  SPECIES = 'species',
  VEHICLES = 'vehicles',
  STARSHIPS = 'starships',
}

type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

@Injectable()
export class SwapiService {
  constructor(private readonly httpService: HttpService) {}

  async requestSwapi<T>(
    resource: SwapiResource,
    page: number,
  ): Promise<Paginated<T>> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${SWAPI_URL}/${resource}?page=${page}`).pipe(
        catchError((error: AxiosError) => {
          throw new Error(error.message);
        }),
      ),
    );
    return data;
  }

  async requestSwapiWithId<T>(resource: SwapiResource, id: number): Promise<T> {
    const { data } = await firstValueFrom(
      this.httpService.get<T>(`${SWAPI_URL}/${resource}/${id}`).pipe(
        catchError((error: AxiosError) => {
          throw new Error(error.message);
        }),
      ),
    );
    return data;
  }

  async fetchResults<T>(resource: SwapiResource): Promise<T[]> {
    let results: T[] = [];
    let hasNext = false;
    let page = 1;
    do {
      const paginatedResults = await this.requestSwapi<T>(resource, page);
      results = [...results, ...paginatedResults.results];
      hasNext = !!paginatedResults.next;
      page++;
    } while (hasNext);
    return results;
  }

  async fetchPeoples() {
    const swapiPeoples = await this.fetchResults<SwapiPeople>(
      SwapiResource.PEOPLE,
    );
    return swapiPeoples.map((swapiPeople) => peopleFactory(swapiPeople));
  }

  async fetchPeople(id: number) {
    const hero = await this.requestSwapiWithId<SwapiPeople>(
      SwapiResource.PEOPLE,
      id,
    );
    return peopleFactory(hero);
  }

  async fetchPlanets() {
    const planets = await this.fetchResults<SwapiPlanet>(SwapiResource.PLANETS);
    return planets.map((planet) => planetFactory(planet));
  }

  async fetchPlanet(id: number) {
    const planet = await this.requestSwapiWithId<SwapiPlanet>(
      SwapiResource.PLANETS,
      id,
    );
    return planetFactory(planet);
  }

  async fetchFilms() {
    const films = await this.fetchResults<SwapiFilm>(SwapiResource.FILMS);
    return films.map((film) => filmFactory(film));
  }

  async fetchFilm(id: number) {
    const film = await this.requestSwapiWithId<SwapiFilm>(
      SwapiResource.FILMS,
      id,
    );
    return filmFactory(film);
  }

  async fetchSpecies() {
    const species = await this.fetchResults<SwapiSpecie>(SwapiResource.SPECIES);
    return species.map((specie) => specieFactory(specie));
  }

  async fetchSpecie(id: number) {
    const specie = await this.requestSwapiWithId<SwapiSpecie>(
      SwapiResource.SPECIES,
      id,
    );
    return specieFactory(specie);
  }

  async fetchVehicles() {
    const vehicles = await this.fetchResults<SwapiVehicle>(
      SwapiResource.VEHICLES,
    );
    return vehicles.map((vehicle) => vehicleFactory(vehicle));
  }

  async fetchVehicle(id: number) {
    const vehicle = await this.requestSwapiWithId<SwapiVehicle>(
      SwapiResource.VEHICLES,
      id,
    );
    return vehicleFactory(vehicle);
  }

  async fetchStarships() {
    const starships = await this.fetchResults<SwapiStarship>(
      SwapiResource.STARSHIPS,
    );
    return starships.map((starship) => starshipFactory(starship));
  }

  async fetchStarship(id: number) {
    const starship = await this.requestSwapiWithId<SwapiStarship>(
      SwapiResource.STARSHIPS,
      id,
    );
    return starshipFactory(starship);
  }

  async fetchAll() {
    const peoples = await this.fetchPeoples();
    const planets = await this.fetchPlanets();
    const films = await this.fetchFilms();
    const species = await this.fetchSpecies();
    const vehicles = await this.fetchVehicles();
    const starships = await this.fetchStarships();
    return {
      peoples,
      planets,
      films,
      species,
      vehicles,
      starships,
    };
  }
}
