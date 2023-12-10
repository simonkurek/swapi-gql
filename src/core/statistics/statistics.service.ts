import { Injectable } from '@nestjs/common';
import { FilmsService } from '../films/films.service';
import { PeoplesService } from '../peoples/peoples.service';
import { Film } from '../films/film';

@Injectable()
export class StatisticsService {
  constructor(
    private readonly filmsService: FilmsService,
    private readonly peoplesService: PeoplesService,
  ) {}

  async wordCount() {
    const films = await this.filmsService.findAll();
    const words = this.getWordsFromOpeningCrawls(films);
    const wordCount: Map<string, number> = this.getWordOccurencesMap(words);
    return wordCount;
  }

  private getWordOccurencesMap(words: string[]) {
    const wordCount: Map<string, number> = new Map();
    words.forEach((word) => {
      this.incrementMapValue(wordCount, word);
    });
    return wordCount;
  }

  async mostAppearedCharacter() {
    const characterNames = await this.getCharacterNamesSplited();
    const films = await this.filmsService.findAll();
    const characters: Map<string, number> = this.countCharacterOccurences(
      films,
      characterNames,
    );
    return await this.getMostAppearedCharacter(characters);
  }

  private getWordsFromOpeningCrawls(films: Film[]) {
    return films
      .map((film) => film.openingCrawl.split(/[\r\n\s.,;:!?]+/))
      .flat()
      .map((word) => word.toLowerCase())
      .filter((word) => word.length > 0);
  }

  private async getCharacterNames() {
    const peoples = await this.peoplesService.findAll();
    const characterNames: string[] = [];
    peoples.forEach((people) => {
      if (!people.name) {
        return;
      }
      characterNames.push(people.name);
    });
    return characterNames;
  }

  private async getCharacterNamesSplited() {
    const names = await this.getCharacterNames();
    let characterNames: string[] = [];
    names.forEach((name) => {
      characterNames = characterNames.concat(name.split(' '));
    });
    characterNames = characterNames.filter((name) => name !== 'the');
    return characterNames;
  }

  private async getMostAppearedCharacter(characters: Map<string, number>) {
    const mostAppearedCharacterName =
      this.getMostAppearedCharacterName(characters);
    const charactersNames = await this.getCharacterNames();
    return charactersNames.find((name) =>
      name.includes(mostAppearedCharacterName),
    );
  }

  private getMostAppearedCharacterName(characters: Map<string, number>) {
    let mostAppearedCharacterName = '';
    let maxAppearances = 0;
    characters.forEach((value, key) => {
      if (value > maxAppearances) {
        mostAppearedCharacterName = key;
        maxAppearances = value;
      }
    });
    return mostAppearedCharacterName;
  }

  private countCharacterOccurences(films: Film[], characterNames: string[]) {
    const characters: Map<string, number> = new Map();
    films.forEach((film) => {
      this.splitFilmOpeningCrawlToWords(film).forEach((word) => {
        const isCharacted = this.isWordCharacterName(word, characterNames);
        if (!isCharacted) {
          return;
        }
        this.addCharacterOccurance(characters, word);
      });
    });
    return characters;
  }

  private splitFilmOpeningCrawlToWords(film: Film) {
    return film.openingCrawl.split(/[\r\n\s.,;:!?]+/);
  }

  private addCharacterOccurance(
    characters: Map<string, number>,
    character: string,
  ) {
    this.incrementMapValue(characters, character);
  }

  private isWordCharacterName(word: string, characterNames: string[]) {
    return word.length > 0 && characterNames.includes(word);
  }

  private incrementMapValue(map: Map<string, number>, key: string) {
    const count = map.get(key);
    if (count) {
      map.set(key, count + 1);
    } else {
      map.set(key, 1);
    }
  }
}
