import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../Actions/index';
import './CountryPicker.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
       
    },[setFetchedCountries]);

    return (
        <div className="header_select">
            <h4>İL </h4>
            <FormControl>
                <NativeSelect className="header_selectbox" onChange={(e) => handleCountryChange(e.target.value)}>
                {fetchedCountries.map((country, i) => (<option key={i} default=""  value={country.plaka}>{country.name}</option>))}
                </NativeSelect>
             </FormControl>
        </div>
      
    )
}

export default CountryPicker;