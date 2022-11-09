import { FETCH_PLACES_FAILURE, FETCH_PLACES_REQUEST, FETCH_PLACES_SUCCESS } from "./placeTypes"

const initialState = {
    loading : true,
    data:[],
    error: '',
}


const placeReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PLACES_REQUEST: 
         return{
            ...state, loading: true
             }

         case FETCH_PLACES_SUCCESS:
            return{
                ...state, loading: false, places: action.payload, error: ''
            }
        
        case FETCH_PLACES_FAILURE:
            return{
                ...state, loading: false, places: [], error: action.payload
            }

        default: return state;
    }
}   

export default placeReducer