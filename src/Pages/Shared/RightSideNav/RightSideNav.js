import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary">Login With Google</Button>
                <Button variant="outline-dark">Login With Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;