const url = process.env.REACT_APP_URL;

export const fetchCharacters = () => {
  return fetch(`${url}/api/people/`)
    .then(res => res.json());
};

export const fetchOneCharacter = (id) => {
  return fetch(`${url}/api/people/${id}`)
    .then(res => res.json());
};
