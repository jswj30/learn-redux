import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입 정의하기-> 1번
const UPDATE_FRUIT = 'user/fruit';
const UPDATE_STRAWBERRY = 'user/strawberry';
const UPDATE_RESET = 'user/reset';

// 액션 생성 함수 만들기 -> 2번
export const updateFruit = createAction(UPDATE_FRUIT);
export const updateStrawberry = createAction(UPDATE_STRAWBERRY);
export const updateReset = createAction(UPDATE_RESET);

// 모듈의 초기 상태를 정의하기 -> 3번
const initialState = {
  fruit: {
    apple: 0, 
    banana: 0, 
  }, 
  strawberry: {
    count: 0, 
  }, 
};

// immer를 사용하여 값을 수정하는 리듀서 -> 4번
export default handleActions({
  [UPDATE_FRUIT]: (state, action) => {
    return produce(state, draft => {
      draft.fruit = action.payload.fruit ? action.payload.fruit : draft.fruit;
    });
  }, 
  [UPDATE_STRAWBERRY]: (state, action) => {
    return produce((state, draft) => {
      draft.strawberry = action.payload.strawberry ? action.payload.strawberry : draft.strawberry;
    });
  }, 
  [UPDATE_RESET]: (state, action) => {
    return produce((state, draft) => {
      draft.fruit = action.payload.fruit ? action.payload.fruit : draft.fruit;
      draft.strawberry = action.payload.strawberry ? action.payload.strawberry : draft.strawberry;
    });
  }, 
}, initialState);