// API/OMDBApi.js

const API_TOKEN = "49313dd4";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://www.omdbapi.com/?s=' + text + '&apikey=' + API_TOKEN;
  
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))

}