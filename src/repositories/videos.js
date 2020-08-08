import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('An error has occurred while saving a video.');
    });
}

export default {
  create,
};
