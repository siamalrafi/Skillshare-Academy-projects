import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndCondition = () => {
    return (
        <div>
            <h1 className='text-danger'><b>Acceptance</b></h1>
            <br />
            <p>This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by JS-Solutions Networks Pte Ltd (the  that you have
                The following terms and conditions apply to all website development / design services provided by JS-Solutions Networks to the Client.
            </p>
            <h1 className='text-danger'><b>Charges</b></h1>
            <p>
                Unless agreed otherwise with the Client, all website design services require an advance payment of a minimum of fifty (50) percent of the project quotation total before the work is supplied to the Client for review. The remaining fifty (50) percent of the project quotation total due upon completion of the work, prior to upload to the server or release of materials.
            </p>
            <p>Go to : <Link to='/register'>Register</Link>
            </p>
        </div>
    );
};

export default TramsAndCondition;