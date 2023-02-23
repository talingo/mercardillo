import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./footer.scss";


import {ReactComponent as Twitter} from '../../assets/mdi_twitter.svg';    
import {ReactComponent as Facebook} from '../../assets/Facebook.svg';     
import {ReactComponent as Instagram} from '../../assets/Instagram.svg'; 


// {/* <Nav.Link as={Link} to="facebook"> <Facebook/> </Nav.Link> */} con bootstrap se importa asi el link 
    function Footer() {
        return (

            <div className="fixed-bottom bg-primary d-flex align-self-center ">     
                               
                
                    <div className='nav-link me-auto'> © Mercadillo  2023.</div>
                    
                <div className='iconos'>                    
                        <div className='nav-link'> Síguenos:</div>
                        <Nav.Link href="https://twitter.com/" target="_blank" width="20" height="20"> <Twitter/></Nav.Link>
                        <Nav.Link href="https://www.facebook.com/" target="_blank" width="94" height="94"> <Facebook/> </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/" target="_blank"width="94" height="94"> <Instagram/> </Nav.Link>
                </div>
                
                </div>
                    
            
        );
        }
        
export default Footer;


