import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Course = () => {

    const coures = useLoaderData();

    return (
        <div>
            <div className="row ">
                {
                    coures.map(coures =>
                        <div className="col-lg-6 mt-5  col-sm" key={coures.id}>
                            <Cards
                                key={coures.id}
                                coures={coures}
                            >
                            </Cards>
                        </div>)
                }
            </div>
        </div >
    );
};

export default Course;