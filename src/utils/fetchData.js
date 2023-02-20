import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com/search';

const options = {
  params: {
    hl: 'en', gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  }
};

export const fetchData = (url) => {
  console.log(process.env.REACT_APP_API_KEY);
  try {
    const response = axios.get(`${BASE_URL}/${url}`, options);
    console.log(response);
    return response;
  } catch(error) {
    console.error("Error", error);
  }
}