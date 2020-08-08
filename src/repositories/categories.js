import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('An error has occurred while fetching categories.');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('An error has occurred while fetching categories with videos.');
    });
}

function create(category) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('An error has occurred while saving a category.');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
