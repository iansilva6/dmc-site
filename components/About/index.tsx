import React from "react";
import { Section, Box, Icon } from './styles';
import { Container, Col, Row } from 'react-bootstrap';
import {BsFlag} from 'react-icons/bs';
import {FaRegHandshake} from 'react-icons/fa';

type Props = {

}

const About: React.FC<Props> = ({ }) => {
    return (
        <Section id={"sobre"}>
            <Container>
                <Row className={"row-eq-height"}>
                    <Col md={6}>
                        <Box>
                            <Icon>
                                <BsFlag size={50}/>
                            </Icon>
                            <h2>Missão</h2>
                            <p>Nossa missão é otimizar resultados e dessa forma atender plenamente os interesses bem como as necessidades dos nossos clientes. Através da prestação de serviços advocatícios de alta qualidade, desenvolvidos com excelência técnica e pautados na ética, nos propomos a encontrar as melhores soluções jurídicas confiáveis para as nossas demandas.</p>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box>
                            <Icon>
                                <FaRegHandshake size={50}/>
                            </Icon>
                            <h2>Valores</h2>
                            <p>Nossos valores são pautados nos princípios da ética, transparência, sustentabilidade, compromisso com as causas sociais e ambientais e a busca incessante pela resolução das demandas de maneira mais célere, bem como a proteção integral dos interesses dos nossos clientes.</p>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default About;