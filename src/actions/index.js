import axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'c49289f1c46bb80f38c90c23346e9da6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


const YOUTUBE_API_KEY = 'AIzaSyDeNZCAEZOrT4UK4n7auOp8Ur1Q1dRXRQM';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: 'FETCH_WEATHER',
        payload : request
    };

} 

export function getVideos(term){
    YTSearch({key : YOUTUBE_API_KEY, term: term}, (videos) => {
            console.log(videos);
            return {
                 type: 'FETCH_VIDEOS',
                 payload : videos
             };
      }); 
   
}