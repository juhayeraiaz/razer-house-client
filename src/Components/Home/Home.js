import React from 'react';
import Banner from '../Banner/Banner'
import Brief from '../Brief/Brief';
import Items from '../Inventory/Items';
import Map from '../Shared/Map/Map';
import ShowReviews from '../Shared/Map/ShowReviews';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Brief></Brief>
            <Items></Items>
            <Map></Map>
            <ShowReviews></ShowReviews>
        </>
    );
};

export default Home;