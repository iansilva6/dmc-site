import React from "react";
import { Section, Cover, Text } from './styles';
import { Container, Col, Row } from 'react-bootstrap';
import Image from "next/image";
import DireitoFamilia from '../../assets/images/direito-familia.webp';
import DireitoDesportivo from '../../assets/images/direito-desportivo.webp';
import DireitoPrevidenciario from '../../assets/images/direito-previdenciario.webp';
import DireitoDigital from '../../assets/images/direito-digital.webp';

type Props = {

}

const Services: React.FC<Props> = ({ }) => {
    return (
        <Section id={"servicos"}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h2>Serviços</h2>
                    </Col>
                </Row>
                <Row className={"row-eq-height"}>
                    <Col sm={12} md={6} lg={4}>
                        <Cover>
                            <Image 
                                src={DireitoFamilia} 
                                alt={"Direito da Família"} 
                                layout="fill"
                                objectFit="cover"
                                className={"cover-img"}
                            />
                            <h3>Direito da Família</h3>
                        </Cover>
                        <Text>
                            <p>Direito de família é o ramo do Direito Civil que trata das relações familiares e das obrigações e direitos decorrentes dessas relações, tem como conteúdo os estudos do casamento, união estável, relações de parentesco, filiação, alimentos, bem de família, tutela, curatela e guarda.</p>
                        </Text>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Cover>
                            <Image 
                                src={DireitoDesportivo} 
                                alt={"Direito da Desportivo"} 
                                layout="fill"
                                objectFit="cover"
                                className={"cover-img"}
                            />
                            <h3>Direito Desportivo</h3>
                        </Cover>
                        <Text>
                            <p>Direito Desportivo é a área jurídica que cuida das relações jurídicas nas atividades desportivas.
                            A sua aplicação envolve o agenciamento de atletas, a relação destes com os clubes e federações, os direitos de imagem, as contratações e outras transações financeiras do meio, até a representação na Justiça Desportiva.</p>
                        </Text>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Cover>
                            <Image 
                                src={DireitoPrevidenciario} 
                                alt={"Direito da Previdenciário"} 
                                layout="fill"
                                objectFit="cover"
                                className={"cover-img"}
                            />
                            <h3>Direito Previdenciário</h3>
                        </Cover>
                        <Text>
                            <p>Direito Previdenciário é um dos ramos do direito público e tem como objetivo o estudo e a regulamentação da seguridade social. Trata, dentre outros aspectos, do amparo aos beneficiários, sejam eles segurados ou dependentes, quando se encontram em alguma situação de necessidade social.</p>
                        </Text>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Cover>
                            <Image 
                                src={DireitoDigital} 
                                alt={"Direito Digital"} 
                                layout="fill"
                                objectFit="cover"
                                className={"cover-img"}
                            />
                            <h3>Direito Digital</h3>
                        </Cover>
                        <Text>
                            <p>O direito digital é um ramo do Direito que surgiu com a finalidade de regulamentar as relações dentro do ambiente digital. Com o desenvolvimento da tecnologia e da interação online, nasceu a necessidade de se editar normas e regras que regulamentem as relações, evitando assim práticas lesivas.</p>
                        </Text>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Cover>
                            <Image 
                                src={DireitoDigital} 
                                alt={"Direito Público e Administrativo"} 
                                layout="fill"
                                objectFit="cover"
                                className={"cover-img"}
                            />
                            <h3>Direito Público e Administrativo</h3>
                        </Cover>
                        <Text>
                            <p>Direito Administrativo é o ramo do direito público que tem por objeto órgãos, agentes e pessoas jurídicas administrativas que integram a Administração Pública, a atividade jurídica não contenciosa que exerce e os bens de que utiliza para a consecução de seus fins, de natureza pública.</p>
                        </Text>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Cover>
                            <Image 
                                src={DireitoDigital} 
                                alt={"Juizado Especial"} 
                                layout="fill"
                                objectFit="cover"
                                className={"cover-img"}
                            />
                            <h3>Juizado Especial</h3>
                        </Cover>
                        <Text>
                            <p>São juízos informais que buscam proporcionar meio célere ao acesso e efetividade da jurisdição, tanto no âmbito cível, quanto criminal e fazendário.</p>
                        </Text>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Services;