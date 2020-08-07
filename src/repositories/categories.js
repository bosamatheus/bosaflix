import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('An error has occurred while fetching categories with video.');
    });
}

export default {
  getAllWithVideos,
};
