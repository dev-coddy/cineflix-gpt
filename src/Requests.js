const key = "6315bc1461badc39e50ea784225d6ef5";

const requests = {
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=27&page=1`,
};

export default requests;
