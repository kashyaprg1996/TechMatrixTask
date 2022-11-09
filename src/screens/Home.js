import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { fetchPlaces } from "../redux/place/placeActions";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getAllTimeZones } from "../helper/timezones";

function Home(){
    const dispatch = useDispatch();
    const allTimezones = getAllTimeZones();
    const [ googlePlaceSearchText, setGooglePlaceSearchText] = useState(null);

    useEffect(()=>{
        dispatch(fetchPlaces());
    },[])

    const _placeReducerState = useSelector((state)=>state.placeReducer);
   console.log("_placeReducerState....",_placeReducerState)

    const handleGooglePlaceSearched =(event,value)=>{
        setGooglePlaceSearchText(value)
    }

    return  (
        <div>
            <h2>Google Place Autocomplete</h2>

            <Autocomplete
                freeSolo
                disableClearable
                options={allTimezones.map((timzone) => timzone.text)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search place"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                )}
                // style={{width:500}}
                value={googlePlaceSearchText}
                onChange={handleGooglePlaceSearched}
            ></Autocomplete>
            

        </div>
    )
}

export default Home;