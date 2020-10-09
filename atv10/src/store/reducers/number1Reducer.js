import {NUM1} from '../actions/types'

const initialState={
    n1:1
}

export default function(state=initialState,action){
    switch(action.type){
        case NUM1:
            return{
                ...state,
                n1:action.payload
            }
        default:
            return state
    }
}