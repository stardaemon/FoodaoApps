import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import InputTableNumber from './TableNumReducer';
import OperateCart from './AddCartReducer';

export const rootReducers = combineReducers({
    menuReducer: MenuReducer,
    tableNumReducer: InputTableNumber,
    cartReducer: OperateCart
})

export type AppState = ReturnType<typeof rootReducers>