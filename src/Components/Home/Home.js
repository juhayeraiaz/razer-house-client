import React from 'react';
import Banner from '../Banner/Banner'
import Items from '../Inventory/Items';
import Map from '../Shared/Map/Map';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <Map></Map>
        </>
    );
};

export default Home;