import { SwapiVO } from './vo/swapi.vo';

const DAY_IN_MILLISECONDS = 1000 * 3600 * 24;

export const isCacheValid = (resource: SwapiVO[]): boolean => {
  if (!resource || resource.length === 0) {
    return false;
  }
  const cacheDate = new Date(resource[0].savetime);
  const currentDate = new Date();
  const diff = currentDate.getTime() - cacheDate.getTime();
  const diffDays = Math.ceil(diff / DAY_IN_MILLISECONDS);
  return diffDays < 1;
};
