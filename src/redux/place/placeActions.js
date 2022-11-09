import axios from "axios";
import { FETCH_PLACES_FAILURE, FETCH_PLACES_REQUEST, FETCH_PLACES_SUCCESS } from "./placeTypes"

const fetchPlacesRequest = () => {
    return{
        type: FETCH_PLACES_REQUEST
    }
}

const fetchPlacesSuccess = (places) => {
    return{
        type: FETCH_PLACES_SUCCESS,
        payload: places
    }
}

const fetchPlacesFailure = (error) => {
    return{
        type: FETCH_PLACES_FAILURE,
        payload: error
    }
}

export const fetchPlaces = ()=>{
    return (dispatch)=>{
        dispatch(fetchPlacesRequest)
        axios.get('https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete')
        .then((response)=>{
            const places = response.data
            dispatch(fetchPlacesSuccess(places))
        })
        .catch((error)=>{
            const errorMsg = error.message
            dispatch(fetchPlacesFailure(errorMsg))
        })
    }
}
