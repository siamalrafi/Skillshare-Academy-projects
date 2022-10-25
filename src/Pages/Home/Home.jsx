import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards'

const Home = () => {
    const [coures, setCoures] = useState([]);
    const data = useLoaderData();
    // console.log(data);


    return (
        <div className="row">
            {
                data.map(coures =>
                    <div className="col-6" key={coures.id}>
                        <Cards
                            key={coures.id}
                            coures={coures}
                    
                        >
                        </Cards>
                    </div>)
            }



        </div >
    );
};

export default Home;