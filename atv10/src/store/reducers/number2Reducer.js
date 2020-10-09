import {NUM2} from '../actions/types'

const initialState={
    n2:1
}

export default function(state=initialState,action){
    switch(action.type){
        case NUM2:
            return{
                ...state,
                n2:action.payload
            }
        default:
            return state
    }
}