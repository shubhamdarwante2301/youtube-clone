import axios from "axios";

// const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//     params: { hl: "en", gl: "US" },
//     headers: {
//         "X-RapidAPI-Key":
//             process.env.REACT_APP_API_KEY,
//         "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//     },
// };

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'New',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'f756c28e2fmsh6322d7c8493543ap17120cjsneb41a50bdcc6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchData = async () => {
    // console.log(process.env.REACT_APP_API_KEY);
    // console.log("url", `${BASE_URL}/${url}`);
    // const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // return data;

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
};