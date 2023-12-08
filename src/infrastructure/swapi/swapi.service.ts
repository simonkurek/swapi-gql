import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { People } from 'src/core/peoples/people';
import { Planet } from 'src/core/planets/planet';
import { Film } from 'src/core/films/film';
import { Specie } from 'src/core/species/specie';
import { Starship } from 'src/core/starships/starship';
import { Vehicle } from 'src/core/vehicles/vehicle';

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

  async requestSwapi<T>(resource: SwapiResource): Promise<Paginated<T>> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${SWAPI_URL}/${resource}/`).pipe(
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
    do {
      const paginatedResults = await this.requestSwapi<T>(resource);
      results = [...results, ...paginatedResults.results];
      hasNext = !!paginatedResults.next;
    } while (hasNext);
    return results;
  }

  async fetchPeoples() {
    return await this.fetchResults<People>(SwapiResource.PEOPLE);
  }

  async fetchPeople(id: number) {
    return await this.requestSwapiWithId<People>(SwapiResource.PEOPLE, id);
  }

  async fetchPlanets() {
    return await this.fetchResults<Planet>(SwapiResource.PLANETS);
  }

  async fetchPlanet(id: number) {
    return await this.requestSwapiWithId<Planet>(SwapiResource.PLANETS, id);
  }

  async fetchFilms() {
    return await this.fetchResults<Film>(SwapiResource.FILMS);
  }

  async fetchFilm(id: number) {
    return await this.requestSwapiWithId<Film>(SwapiResource.FILMS, id);
  }

  async fetchSpecies() {
    return await this.fetchResults<Specie>(SwapiResource.SPECIES);
  }

  async fetchSpecie(id: number) {
    return await this.requestSwapiWithId<Specie>(SwapiResource.SPECIES, id);
  }

  async fetchVehicles() {
    return await this.fetchResults<Vehicle>(SwapiResource.VEHICLES);
  }

  async fetchVehicle(id: number) {
    return await this.requestSwapiWithId<Vehicle>(SwapiResource.VEHICLES, id);
  }

  async fetchStarships() {
    return await this.fetchResults<Starship>(SwapiResource.STARSHIPS);
  }

  async fetchStarship(id: number) {
    return await this.requestSwapiWithId<Starship>(SwapiResource.STARSHIPS, id);
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
