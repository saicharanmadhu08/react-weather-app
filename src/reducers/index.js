import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import VideoReducer from './videos_reducer';

const rootReducer = combineReducers({
  weather : WeatherReducer,
  videos : VideoReducer
});

export default rootReducer;