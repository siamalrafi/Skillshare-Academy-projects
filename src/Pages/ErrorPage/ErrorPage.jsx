import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <section className=' flex items-center h-screen p-16 '>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='max-w-md text-center'>
                        <h2 className='text-danger mt-5 pt-5 display-4'>
                            <span className='sr-only'><b>Error</b></span>404
                        </h2>
                        <p className='h-4 mb-8'>
                            Sorry, we couldn't find this page.
                        </p>
                        <Link to={`/`}>
                        <Button variant="success">Back to homepage</Button>{' '}
                    </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;