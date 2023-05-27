export const exerciseOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '745c8b0d3amshf464e0f5045bd95p116266jsn3de7c95cac59',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '745c8b0d3amshf464e0f5045bd95p116266jsn3de7c95cac59',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
