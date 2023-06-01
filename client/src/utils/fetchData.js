export const exerciseOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'b65613b4cfmsh1ec5b1f0e47fee5p14d5c4jsn3d61a63c877d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'ce7a8435a4msh64667888d0e44c9p1933c2jsnae39e4ec5c1c',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
