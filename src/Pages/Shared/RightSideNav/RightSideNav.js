import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaQuoteRight } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';



const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h6>Find Us On</h6>
                <ListGroup className='mt-3'>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaQuoteRight></FaQuoteRight> Terms and condition</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;