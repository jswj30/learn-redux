// 제작한 redux파일을 모아 export한다.
import { combineReducers } from 'redux';
import fruitData from './fruitData';

export default combineReducers({
  fruitData, 
});