import {createStore, combineReducers} from 'redux'
import number1Reducer from './reducers/number1Reducer'
import number2Reducer from './reducers/number2Reducer'
const reducers = combineReducers(
    {
        Number1: number1Reducer,
        Number2: number2Reducer
    }
)

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig