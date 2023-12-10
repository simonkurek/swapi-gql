import { SwapiVO } from './vo/swapi.vo';

export const isCacheValid = (resource: SwapiVO[]): boolean => {
  if (!resource || resource.length === 0) {
    return false;
  }
  const cacheDate = new Date(resource[0].savetime);
  const currentDate = new Date();
  const diff = currentDate.getTime() - cacheDate.getTime();
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDays < 1;
};
