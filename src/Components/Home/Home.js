import React from 'react';
import Banner from '../Banner/Banner'
import Items from '../Inventory/Items';
import Map from '../Shared/Map/Map';
import ShowReviews from '../Shared/Map/ShowReviews';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <Map></Map>
            <ShowReviews></ShowReviews>
        </>
    );
};

export default Home;