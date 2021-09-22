import React from "react";
import { Section } from './styles';
import Image from "next/image";
import { Container, Col, Row } from 'react-bootstrap';

import LeoImage from '../../assets/images/leo.webp';
import JoseImage from '../../assets/images/jose.webp';
import JosemarImage from '../../assets/images/josemar.webp';

type Props = {

}

const Team: React.FC<Props> = ({ }) => {
    return (
        <Section id={"equipe"}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h2>Nossa Equipe</h2>
                    </Col>
                    <Col sm={12} md={4}>
                        <Row>
                            <Col sm={12} className={"d-flex justify-content-center"}>
                                <Image 
                                    src={JosemarImage} 
                                    alt={"Josemar Duarte Advogado"} 
                                    width={150}
                                    height={150}
                                    className={"avatar-img"}
                                />
                            </Col>
                            <Col sm={12}>
                                <h3>Josemar Duarte</h3>
                                <a href={"https://www.instagram.com/josemarduarte/"} target={"_blank"} rel={"noreferrer"} className={"insta-user"}>
                                    <div className="insta-user">
                                        @josemarduarte
                                    </div>
                                </a>
                            </Col>
                            <Col sm={12} className={"d-flex justify-content-center"}>
                                <p>Dr. Josemar Duarte, Advogado e Sócio da DuarteMatos&Carvalho, responsável por todas as demandas relacionadas a pasta Previdenciária, com atuação nas solicitações administrativas e judiciais de benefícios da Seguridade Social, tanto dos Regimes Próprios quanto do Regime Geral de Previdência, bem como toda parte de consultoria e assessoria jurídica nas questões que envolvam planejamento Previdenciário.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={4}>
                        <Row>
                            <Col sm={12} className={"d-flex justify-content-center"}>
                                <Image 
                                    src={LeoImage} 
                                    alt={"Leonam Matos Advogado"} 
                                    width={150}
                                    height={150}
                                    className={"avatar-img"}
                                />
                            </Col>
                            <Col sm={12}>
                                <h3>Leonam Matos</h3>
                                <a href={"https://www.instagram.com/leonammatos/"} target={"_blank"} rel={"noreferrer"} className={"insta-user"}>
                                    <div className="insta-user">
                                        @leonammatos
                                    </div>
                                </a>
                            </Col>
                            <Col sm={12} className={"d-flex justify-content-center"}>
                                <p>Leonam Matos, Advogado e Sócio da DuarteMatos&Carvalho, com atuação profissional dedicada ao segmento do Direito Desportivo, desempenha seu exercício especialmente no âmbito futebolístico, na assessoria jurídica para Agentes, Intermediários, Empresários e Atletas de futebol, na elaboração e análises de contratos de trabalho, representação, imagem, patrocínios e publicidade, bem como nas negociações e transferência entre clubes nacionais e internacionais.
                                Atualmente, grande parte da sua prática se relaciona também aos temas do Direito Público e Administrativo, inclusive na atuação preventiva e repressiva por intermédio da impetração de mandados de segurança e ações constitucionais, em face de atos ilícitos perpetrados pelo poder público.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={4}>
                        <Row>
                            <Col sm={12} className={"d-flex justify-content-center"}>
                                <Image 
                                    src={JoseImage} 
                                    alt={"José Carvalho Advogado"} 
                                    width={150}
                                    height={150}
                                    className={"avatar-img"}
                                />
                            </Col>
                            <Col sm={12}>
                                <h3>José Carvalho</h3>
                                <a href={"https://www.instagram.com/juniorcarvalho.adv/"} target={"_blank"} rel={"noreferrer"} className={"insta-user"}>
                                    <div className="insta-user">
                                        @juniorcarvalho.adv
                                    </div>
                                </a>
                            </Col>
                            <Col sm={12} className={"d-flex justify-content-center"}>
                                <p>Dr. José Carvalho Junior, Advogado e Sócio da DuarteMatos&Carvalho, com atuação de destaque e vasta experiência no âmbito dos Juizados Especiais, Direito de Família e Direito Digital nas demandas de consumo online e no segmento inovador das startups.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Team;