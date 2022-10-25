import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SideNav = () => {

    const [coures, setCoures] = useState([]);

    const data = useLoaderData([]);

    console.log(data);
    return (
        <div>
            <h1>SideNav</h1>
            <h1>SideNav</h1>
        </div>
    );
};

export default SideNav;