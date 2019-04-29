import { getResource, fetchCityData } from './fetchCityData';

const error = jest.spyOn(global.console, 'error').mockImplementation(() => {});

describe('`getResource` function', () => {
  it('should return defined', () => {
    const result = getResource();
    expect(result).toBeDefined();
  });
});

describe('`fetchCityData` function', () => {
  it('should return an array', async () => {
    const result = await fetchCityData();
    expect(Array.isArray(result)).toBeTruthy();
    expect(error).toHaveBeenCalled();
  });
});
