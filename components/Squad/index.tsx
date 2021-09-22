import React from "react";
import { Section } from './styles';
import Image from "next/image";
import { Container, Col, Row } from 'react-bootstrap';

import AboutImage from '../../assets/images/suits.webp';

type Props = {

}

const Squad: React.FC<Props> = ({ }) => {
    return (
        <Section>
            <Container>
                <Row className={"row-eq-height d-flex align-items-center"}>
                    <Col md={6}>
                        <h2>Quem Somos</h2>
                        <p>A DuarteMatos&Carvalho é uma sociedade de advogados moderna que oferece de maneira inovadora, diferenciada e ágil um serviço profissional e atendimento personalizado espelhado no mais alto padrão de qualidade. Nossos associados são valorosos advogados altamente gabaritados em vários segmentos de atuação e negócios, proporcionando de forma técnica e especializada a satisfação dos interesses dos nossos clientes. Nosso compromisso é prestar serviços advocatícios com excelência profissional e ética, levando soluções jurídicas inteligentes, criativas e eficientes.</p>
                    </Col>
                    <Col md={6}>
                        <Image 
                            src={AboutImage} 
                            alt={"Quem Somos"} 
                            layout="responsive"
                            objectFit="fill" 
                            className={"about-img"}
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Squad;