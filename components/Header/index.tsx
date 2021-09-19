import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import Social from '../Social';
import { Menu } from './styles';

type Props = {
    logo: StaticImageData,
    logoAlt: string,
}

const Header: React.FC<Props> = ({ logo, logoAlt }) => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <Menu scroll={offset}>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col sm={12} lg={6}>
                        <Navbar expand="lg">
                            <Container>
                                <Navbar.Brand href="#home">
                                    <Image id={"cover-img"} src={logo} alt={logoAlt} width="100" height="100" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Sobre</Nav.Link>
                                        <Nav.Link href="#equipe">Equipe</Nav.Link>
                                        <Nav.Link href="#servicos">Serviços</Nav.Link>
                                        <Nav.Link href="#blog">Blog</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col sm={12} lg={6} className={"d-flex justify-content-end d-none d-lg-flex"}>
                        <Social />
                    </Col>
                </Row>
            </Container>
        </Menu>
    )
}

export default Header;