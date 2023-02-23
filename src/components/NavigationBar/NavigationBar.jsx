import React from "react";
import {
	Container,
	Navbar,
	Nav,
	NavDropdown,
	Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-mercardillo.png";

const NavigationBar = () => {
	return (
		<Navbar
			bg="primary"
			expand="lg"
			fixed="top"
		>
			<Container>
				<Link to="/home">
					<Navbar.Brand href="#">
						<Image
							src={logo}
							style={{ width: "80px", height: "auto" }}
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="basic-navbar-nav justify-content-end">
					<Nav className="mr-auto">
						<NavDropdown
							title="Menu"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#">Anuncios</NavDropdown.Item>
							<Link to="/form">
								<NavDropdown.Item href="/home">
									Publica tu Anuncio
								</NavDropdown.Item>
							</Link>
							<NavDropdown.Item href="#">
								Sobre Nosotros
							</NavDropdown.Item>
							<NavDropdown.Item href="#">Contacto</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
