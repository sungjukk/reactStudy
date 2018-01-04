import * as types from './ActionTypes';

export const increment = () => ({
    type : types.INCREMENT
});

export const decrement = () => ({
    type : types.DECREMENT
});

// 파라미터를 가지고 있는 생성자
export const setColor = (color) => ({
    type : types.SET_COLOR,
    color
});