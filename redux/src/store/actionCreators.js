// 제작한 redux파일을 모아 export한다.
import { bindActionCreators } from 'redux';
import * as fruitDataAction from './modules/fruitData';

import store from './index';

const { dispatch } = store;

export default FruitDataAction = bindActionCreators(fruitDataAction, dispatch);