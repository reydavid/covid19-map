import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadCountriesTask from '../tasks/LoadCountriesTask'

const Covid = () => {
    const [countries, setCountries] = useState([]);
    
    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };
    useEffect(load, []); //page load we tell it to track [] same as componentDidMount

    return  (
    <div>
        {countries.length === 0 ? (
        <Loading />
        ) : (
        <div>
            <CovidMap />
            <Legend />
        </div>
        )}
    </div>
    );
};

export default Covid;