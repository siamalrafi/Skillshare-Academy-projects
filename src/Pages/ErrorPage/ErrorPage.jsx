import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className=' flex items-center h-screen p-16 '>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='max-w-md text-center'>
                        <h2 className='text-danger mt-5 pt-5 font-bold'>
                            <span className='sr-only'>Error</span>404
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl mb-8'>
                            Sorry, we couldn't find this page.
                        </p>
                        <Link
                            to='/'
                            className='text-primary'
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;