import axios from 'axios'

const url = 'https://api.themoviedb.org/3';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjc0ODM4MTc3NjY1NzgwZGQwZDkxYTc3ZmRjZTBkNSIsInN1YiI6IjY2NzFjMGNkMWJmODZmNjA1ZjZhYjczNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bGfItn4p9hU4cb_pftGcsmyGnofnNsfTmuG_CKFBPrA';


const options = {
  headers: {
    Authorization: `Bearer ${token}`
    },
};

export const getMovies = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${url}${endpoint}`, {
      ...options,
      params
    });
    console.log('datares', response.data.results)
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const getMovie = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${url}${endpoint}`, {
      ...options,
      params
    });
    console.log('data', response.data)
    return response.data;
    
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};