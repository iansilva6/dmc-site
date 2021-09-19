import React from "react";
import Image from "next/image";
import { Container, Col, Row} from 'react-bootstrap';
import Social from '../Social';
import { Rodape } from './styles';

type Props = {
    logo: StaticImageData,
    logoAlt: string,
}

const Footer: React.FC<Props> = ({ logo, logoAlt }) => {
    return (
        <Rodape>
            <Container>
                <Row>
                    <Col sm={6} className={"d-flex align-items-center mb-3"}>
                        <Image src={logo} alt={logoAlt} width="100" height="100" />
                    </Col>
                    <Col sm={6} className={"d-flex align-items-center justify-content-end"}>
                        <Social/>
                    </Col>
                </Row>
            </Container>
        </Rodape>
    )
}

export default Footer;