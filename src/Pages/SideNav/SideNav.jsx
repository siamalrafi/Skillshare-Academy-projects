import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const SideNav = () => {

    const [coures, setCoures] = useState([]);
    const data = useLoaderData([]);
    // console.log(data);

    return (
        <div>
            <ButtonGroup className='  w-100 ' vertical>
                {
                    data.map(coures => <Link
                        to={`details/${coures.id}`}
                        className='pt-4 w-full text-primary '
                        key={coures.id}
                    >
                        {coures.title}
                    </Link>)
                }
            </ButtonGroup>
        </div>
    );
};

export default SideNav;