import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const SideNav = () => {

    const [coures, setCoures] = useState([]);

    const data = useLoaderData([]);

    console.log(data);
    return (
        <div>
            <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton
                    as={ButtonGroup}
                    title="Dropdown"
                    id="bg-vertical-dropdown-1"
                >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton
                    as={ButtonGroup}
                    title="Dropdown"
                    id="bg-vertical-dropdown-2"
                >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    as={ButtonGroup}
                    title="Dropdown"
                    id="bg-vertical-dropdown-3"
                >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </div>
    );
};

export default SideNav;