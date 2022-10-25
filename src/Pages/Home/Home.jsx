import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards'

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
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

            </div>
        </div>
    );
};

export default Home;