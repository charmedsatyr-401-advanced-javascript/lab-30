import superagent from 'superagent';

const APP_URL = 'https://city-explorer-backend.herokuapp.com';

const getResource = async (resource, location) => {
  try {
    const result = await superagent.get(`${APP_URL}/${resource}`).query({ data: location });
    return result;
  } catch (err) {
    console.error(err);
  }
};

// Returns an array of objects with resource keys and promise values for a particular location
// Formatted location is squeezed in at the last moment.
const fetchCityData = async searchQuery => {
  try {
    let location = await superagent.get(`${APP_URL}/location`).query({ data: searchQuery });
    location = location.body;
    const resources = ['weather', 'movies', 'yelp', 'meetups', 'trails'];
    const cityDataPromises = resources.map(resource => getResource(resource, location));
    const cityData = await Promise.all(cityDataPromises);
    return [
      { location: location.formatted_query },
      ...cityData.map((result, i) => ({
        [resources[i]]: result,
      })),
    ];
  } catch (err) {
    console.error(err);
  }
};

export default fetchCityData;
