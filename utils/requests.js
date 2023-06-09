const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const requests = {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    },
    fetchTopRated: {
      title: "Top Rated",
      url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    },
    fetchActionMovies: {
      title: "Action",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
      title: "Comedy",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchRomanceMovies: {
      title: "Romance",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
      title: "Mystery",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchCrime: {
      title: "Crime",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    },
    fetchFantasyMovies: {
      title: "Fantasy",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    },
    fetchThrillerMovies: {
      title: "Thriller",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    },
    fetchSciFi: {
      title: "Sci-Fi",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchWestern: {
      title: "Western",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchHorror: {
      title: "Horror",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchAnimation: {
      title: "Animation",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchAdventureMovies: {
      title: "Adventure",
      url: `/discover/movie?api_key=${API_KEY}&with_geners=12`,
    },
    fetchTVmovies: {
      title: "TV Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_geners=10770`,
    },
}