import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [coures, setCoures] = useState([]);

    
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>HomeHomeHome</h1>
            <h1>HomeHomeHome</h1>
            <h1>HomeHomeHome</h1>
        </div>
    );
};

export default Home;