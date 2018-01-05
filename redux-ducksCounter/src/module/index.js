import {createAction, handleActions} from 'redux-actions';
import {Map, List} from 'immutable';


// 액션 타입
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// 액션 생성자 (옆에 주석은 받아오는 파라미터 타입 'payload'에 자동으로 받아옴)
export const create = createAction(CREATE); //color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); //index
export const decrement = createAction(DECREMENT); //index
export const setColor = createAction(SET_COLOR); // { index, color }

// 초기 상태를 정의합니다
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
});

// 리듀서 틀 (여기에서는 액션타입에 접두사가 들어가있기 때문에 'CREATE:' 가 아니라 '[CREATE]:'로 해줘야함)
export default handleActions({
    [CREATE] : (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.push(
            Map({
                color : action.payload,
                number : 0
            })
        ))
    },
    [REMOVE] : (state, action) => {
        const counters = state.get('counters');
        return state.set('counters',counters.pop())
    },
    [INCREMENT] : (state, action) => {
        const counters = state.get('counters');
        return state.set('counters',counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') + 1)
        ));
    },
    [DECREMENT] : (state, action) => {
        const counters = state.get('counters');
        return state.set('counters',counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') - 1)
        ));
    },
    [SET_COLOR] : (state, action) => {
        const counters = state.get('counters');
        return state.set('counters',counters.update(
            action.payload.index,
            (counter) => counter.set('color', action.payload.color)
        ));
    }
}, initialState);