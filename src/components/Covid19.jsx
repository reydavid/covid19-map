import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import CovidMap from './CovidMap';
import LoadCountriesTask from '../tasks/LoadCountriesTask';
import Legend from './Legend';
import legendItems from '../entities/LegendItems';

const Covid = () => {
    const [countries, setCountries] = useState([]);
    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load((countries) => setCountries(countries));
    };
    useEffect(load, []); //page load we tell it to track [] same as componentDidMount

    return  (
    <div>
        {countries.length === 0 ? (
        <Loading />
        ) : (
        <div>
            <CovidMap countries={countries} />
            <Legend legendItems={legendItemsInReverse} />
        </div>
        )}
    </div>
    );
};

export default Covid;