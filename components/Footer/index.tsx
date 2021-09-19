import React from "react";
import Image from "next/image";
import { Container, Col, Row} from 'react-bootstrap';
import Social from '../Social';
import { Rodape, Phone, Address } from './styles';

type Props = {
    logo: StaticImageData,
    logoAlt: string,
}

const Footer: React.FC<Props> = ({ logo, logoAlt }) => {
    return (
        <Rodape>
            <Container>
                <Row>
                    <Col xs={6} sm={6} className={"d-flex align-items-center mb-3"}>
                        <Image src={logo} alt={logoAlt} width="100" height="100" />
                    </Col>
                    <Col xs={6} sm={6} className={"d-flex align-items-center justify-content-end"}>
                        <Row>
                            <Col sm={12} className={"d-flex align-items-center justify-content-end"}>
                                <Social/>
                            </Col>
                            <Col sm={12} className={"d-flex align-items-center justify-content-end mt-3"}>
                                <Phone href={"tel:+5571991977966"}><b>Telefone:</b> (71) 9 9197 7966</Phone>
                            </Col>
                            <Col sm={12} className={"d-flex align-items-center justify-content-end mt-3"}>
                                <Address><b>Endereço:</b> R. Alberto Fiúsa, 82 - Imbuí,<br/>Salvador - BA, 41720-025, Brasil</Address>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Rodape>
    )
}

export default Footer;